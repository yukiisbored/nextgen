import { ChevronDown, ChevronUp } from "lucide-react";
import { marked } from "marked";
import {
  type DetailedHTMLProps,
  type HTMLAttributes,
  useMemo,
  useState,
} from "react";
import { cn } from "../../../utils/cn";
import { type Game, type Series, games } from "./games";

function GameRow({ name, game }: { name: string; game: Game }) {
  const [showNotes, setShowNotes] = useState(false);
  const specialFeatures = useMemo<Array<string>>(() => {
    if (game.method.type !== "built-in") {
      return [];
    }

    const features: Array<string> = [];
    if (game.method.friendPass) {
      features.push("Friend Pass");
    }

    if (game.method.crossPlay) {
      const crossPlay = Array.isArray(game.method.crossPlay)
        ? game.method.crossPlay.join("/")
        : game.method.crossPlay;
      features.push(`Crossplay (${crossPlay})`);
    }

    if (game.method.crossProgression) {
      features.push("Cross-progression");
    }

    if (game.features?.modSupport) {
      features.push("Mod support");
    }

    return features;
  }, [game]);

  const method = useMemo(() => {
    if (game.method.type === "built-in") {
      return <span>Built-in</span>;
    }

    return (
      <>
        <span>Mod: </span>
        <a href={game.method.href} target="_blank" rel="noopener noreferrer">
          {game.method.name}
        </a>
      </>
    );
  }, [game.method]);

  const connectionModes = useMemo(() => {
    return game.connectionModes
      .map((mode) => {
        if (mode.type === "cloud-server") {
          return (
            <span key={mode.type}>
              Cloud server
              {mode.paid && <span> (Paid)</span>}
            </span>
          );
        }

        const type =
          mode.type === "split-screen"
            ? "Split-screen"
            : mode.type === "self-hosted-server"
              ? "Self-hosted server"
              : "Peer-to-Peer";

        const mod = "mod" in mode && mode.mod && (
          <>
            <span> (Mod: </span>
            <a href={mode.mod.href} target="_blank" rel="noopener noreferrer">
              {mode.mod.name}
            </a>
            <span>)</span>
          </>
        );

        const supportedPlatforms = "platforms" in mode && (
          <span> ({mode.platforms?.join("/")})</span>
        );

        return (
          <span key={mode.type}>
            {type}
            {supportedPlatforms}
            {mod}
          </span>
        );
      })
      .reduce((prev, curr) => {
        return (
          <>
            {prev}
            <span key={curr.key}>, </span>
            {curr}
          </>
        );
      });
  }, [game.connectionModes]);

  const toggleNotes = () => setShowNotes((v) => !v);

  const makeButton: DetailedHTMLProps<
    HTMLAttributes<HTMLTableRowElement>,
    HTMLTableRowElement
  > = game.notes
    ? {
        className:
          "odd:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500",
        role: "button",
        tabIndex: 0,
        onClick: toggleNotes,
        onKeyDown(e) {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggleNotes();
          }
        },
        "aria-expanded": showNotes,
      }
    : {};

  return (
    <>
      <tr className="odd:bg-neutral-100" {...makeButton}>
        <td>
          {name}
          {game.includes && (
            <sup title={game.includes.join(", ")} className="has-footnote">
              +
            </sup>
          )}
        </td>
        <td>{method}</td>
        <td>{connectionModes}</td>
        <td>{specialFeatures.join(", ")}</td>
        {game.notes ? (
          <td className="flex items-center justify-center">
            <ChevronDown
              className={cn(
                "w-4 h-4 transition-transform duration-300 ease-in-out",
                showNotes && "rotate-180",
              )}
              aria-hidden={true}
            />
          </td>
        ) : (
          <td />
        )}
      </tr>
      {showNotes && (
        <tr className="odd:bg-neutral-100">
          <td colSpan={5}>
            {game.notes?.map((v) => (
              <p
                key={v}
                // biome-ignore lint/security/noDangerouslySetInnerHtml: This is safe since we control the content
                dangerouslySetInnerHTML={{
                  __html: marked.parse(v) as string,
                }}
              />
            ))}
          </td>
        </tr>
      )}
    </>
  );
}

function SeriesRow({ name, series }: { name: string; series: Series }) {
  return (
    <>
      <tr className="bg-neutral-200">
        <td colSpan={5} className="font-bold">
          {name}
        </td>
      </tr>
      {Object.entries(series.games).map(([gameName, game]) => (
        <GameRow key={gameName} name={gameName} game={game} />
      ))}
    </>
  );
}

function Row({ name, item }: { name: string; item: Game | Series }) {
  if ("games" in item) {
    return SeriesRow({ name, series: item });
  }

  return GameRow({ name, game: item });
}

export function Table() {
  const entries = useMemo(() => Object.entries(games), []);
  const allGames = useMemo(() => {
    const seriesGames = entries
      .filter((entry): entry is [string, Series] => "games" in entry[1])
      .flatMap(([, series]) => Object.keys(series.games));
    const standaloneGames = entries
      .filter((entry): entry is [string, Game] => !("games" in entry[1]))
      .map(([name]) => name);
    return standaloneGames.concat(seriesGames);
  }, [entries]);
  const allSeries = useMemo(() => {
    return entries.filter(
      (entry): entry is [string, Series] => "games" in entry[1],
    );
  }, [entries]);
  const sorted = useMemo(() => {
    const sortedGames = entries
      .filter((entry): entry is [string, Game] => !("games" in entry[1]))
      .toSorted((a, b) => a[0].localeCompare(b[0]));
    const sortedSeries = entries
      .filter((entry): entry is [string, Series] => "games" in entry[1])
      .toSorted((a, b) => a[0].localeCompare(b[0]));
    return [...sortedGames, ...sortedSeries];
  }, [entries]);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Game</th>
            <th>Method</th>
            <th>Connection Modes</th>
            <th>Special Features</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {sorted.map(([name, item]) => (
            <Row key={name} name={name} item={item} />
          ))}
        </tbody>
      </table>
      <p className="mt-4 text-sm text-neutral-600">
        {allGames.length} games total, including {allSeries.length} series.
      </p>
    </>
  );
}
