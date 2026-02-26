import { useMemo, useState } from "react";
import { games, type Game, type Series } from "./games";
import { ChevronDown, ChevronUp } from "lucide-react";
import { marked } from "marked";

function GameRow(game: Game) {
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

    return features;
  }, [game.method]);

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

        if (mode.type === "self-hosted-server") {
          return <span>Self-hosted server</span>;
        }

        const type =
          mode.type === "split-screen" ? "Split-Screen" : "Peer-to-Peer";

        const mod = mode.mod && (
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

  return (
    <>
      <tr className="odd:bg-neutral-100">
        <td>
          {game.name}
          {game.includes && (
            <sup title={game.includes.join(", ")} className="has-footnote">
              +
            </sup>
          )}
        </td>
        <td>{method}</td>
        <td>{connectionModes}</td>
        <td>{specialFeatures.join(", ")}</td>
        <td className="block m-auto">
          {game.notes && (
            <button
              type="button"
              className="rounded-md h-1 px-2.5 text-center text-sm transition-all disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              onClick={() => setShowNotes((v) => !v)}
            >
              {showNotes ? <ChevronUp /> : <ChevronDown />}
            </button>
          )}
        </td>
      </tr>
      {showNotes && (
        <tr>
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

function SeriesRow({ series, games }: Series) {
  return (
    <>
      <tr className="bg-neutral-200">
        <td colSpan={5} className="font-bold">
          {series}
        </td>
      </tr>
      {games.map((game) => (
        <GameRow key={game.name} {...game} />
      ))}
    </>
  );
}

function Row(item: Game | Series) {
  if ("series" in item) {
    return SeriesRow(item);
  }

  return GameRow(item);
}

export function Table() {
  const sorted = useMemo(() => {
    const sortedGames: Array<Game | Series> = games
      .filter((item): item is Game => !("series" in item))
      .toSorted((a, b) => a.name.localeCompare(b.name));
    const sortedSeries = games
      .filter((item): item is Series => "series" in item)
      .toSorted((a, b) => a.series.localeCompare(b.series));
    return sortedGames.concat(sortedSeries);
  }, []);

  return (
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
        {sorted.map((item) => (
          <Row key={"series" in item ? item.series : item.name} {...item} />
        ))}
      </tbody>
    </table>
  );
}
