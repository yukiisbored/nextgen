type Platform = "PC" | "Xbox" | "PlayStation";

type ModMethod = {
  type: "mod";
  name: string;
  href: string;
};

type CrossPlay = "cross-platform" | "cross-generation" | Array<Platform>;

type BuiltInMethod = {
  type: "built-in";
  friendPass?: true;
  crossPlay?: CrossPlay;
  crossProgression?: true;
};

type Method = ModMethod | BuiltInMethod;

type ConnectionMode =
  | { type: "cloud-server"; paid?: true }
  | { type: "self-hosted-server" }
  | {
      type: "split-screen";
      mod?: Omit<ModMethod, "type">;
      platforms?: Array<Platform>;
    }
  | { type: "peer-to-peer"; mod?: Omit<ModMethod, "type"> };

export type Game = {
  name: string;
  includes?: Array<string>;
  method: Method;
  connectionModes: Array<ConnectionMode>;
  notes?: Array<string>;
};

export type Series = {
  series: string;
  games: Array<Game>;
};

export const games: Array<Game | Series> = [
  {
    name: "Don't Starve Together",
    method: {
      type: "built-in",
    },
    connectionModes: [
      { type: "self-hosted-server" },
      { type: "peer-to-peer" },
      { type: "split-screen", platforms: ["Xbox", "PlayStation"] },
    ],
  },
  {
    name: "Baldur's Gate 3",
    method: {
      type: "built-in",
      crossPlay: "cross-platform",
      crossProgression: true,
    },
    connectionModes: [{ type: "peer-to-peer" }],
  },
  {
    name: "The Binding of Isaac: Repentance",
    method: {
      type: "built-in",
    },
    connectionModes: [{ type: "peer-to-peer" }, { type: "split-screen" }],
  },
  {
    name: "Stardew Valley",
    method: {
      type: "built-in",
      crossPlay: "cross-generation",
    },
    connectionModes: [{ type: "peer-to-peer" }, { type: "split-screen" }],
  },
  {
    name: "Portal 2",
    method: {
      type: "built-in",
    },
    connectionModes: [{ type: "peer-to-peer" }],
  },
  {
    name: "Last Epoch",
    method: {
      type: "built-in",
    },
    connectionModes: [{ type: "peer-to-peer" }],
  },
  {
    name: "DOOM (1993)",
    includes: ["DOOM II"],
    method: {
      type: "built-in",
    },
    connectionModes: [{ type: "self-hosted-server" }],
  },
  {
    name: "NZ: Portable (COD Zombies Demake)",
    method: {
      type: "built-in",
    },
    connectionModes: [{ type: "self-hosted-server" }],
  },
  {
    name: "Terraria",
    method: { type: "built-in", crossPlay: "cross-generation" },
    connectionModes: [
      { type: "peer-to-peer" },
      { type: "split-screen", platforms: ["Xbox", "PlayStation"] },
    ],
  },
  {
    name: "Vintage Story",
    method: {
      type: "built-in",
    },
    connectionModes: [{ type: "self-hosted-server" }],
  },
  {
    name: "Satisfactory",
    method: {
      type: "built-in",
      crossPlay: ["Xbox", "PlayStation"],
    },
    connectionModes: [{ type: "peer-to-peer" }, { type: "self-hosted-server" }],
  },
  {
    name: "Barony",
    method: {
      type: "built-in",
    },
    connectionModes: [{ type: "peer-to-peer" }, { type: "split-screen" }],
  },
  {
    name: "Hytale",
    method: {
      type: "built-in",
    },
    connectionModes: [{ type: "self-hosted-server" }, { type: "peer-to-peer" }],
    notes: [
      "[Exaroton](https://exaroton.com/:en/) offers Hypixel hosting with mod support that is billed on a per hour basis when the server is active/online.",
    ],
  },
  {
    series: "Left 4 Dead",
    games: [
      {
        name: "Left 4 Dead",
        method: {
          type: "built-in",
        },
        connectionModes: [{ type: "peer-to-peer" }],
      },
      {
        name: "Left 4 Dead 2",
        method: {
          type: "built-in",
        },
        connectionModes: [{ type: "peer-to-peer" }, { type: "split-screen" }],
      },
    ],
  },
  {
    series: "Warhammer 40K",
    games: [
      {
        name: "Warhammer 40K: Rogue Trader",
        method: {
          type: "built-in",
          crossPlay: "cross-platform",
        },
        connectionModes: [{ type: "peer-to-peer" }],
      },
      {
        name: "Warhammer 40K: Space Hulk Deathwing",
        method: {
          type: "built-in",
        },
        connectionModes: [{ type: "peer-to-peer" }],
      },
      {
        name: "Warhammer 40K: Dawn of War",
        method: {
          type: "built-in",
          crossPlay: "cross-platform",
        },
        connectionModes: [{ type: "peer-to-peer" }],
      },
      {
        name: "Warhammer 40K: Battlefleet Gothic Armada II",
        method: {
          type: "built-in",
          crossPlay: "cross-platform",
        },
        connectionModes: [{ type: "peer-to-peer" }],
      },
      {
        name: "Warhammer 40K: Space Marine 2",
        method: {
          type: "built-in",
          crossPlay: "cross-platform",
        },
        connectionModes: [{ type: "peer-to-peer" }],
      },
    ],
  },
  {
    series: "Monster Hunter",
    games: [
      {
        name: "Monster Hunter Rise",
        method: {
          type: "built-in",
          crossPlay: "cross-generation",
        },
        connectionModes: [{ type: "peer-to-peer" }],
      },
      {
        name: "Monster Hunter World",
        method: {
          type: "built-in",
        },
        connectionModes: [{ type: "peer-to-peer" }],
      },
      {
        name: "Monster Hunter Wilds",
        method: {
          type: "built-in",
          crossPlay: "cross-platform",
        },
        connectionModes: [{ type: "peer-to-peer" }],
      },
    ],
  },
  {
    series: "Far Cry",
    games: [
      {
        name: "Far Cry 4",
        method: {
          type: "built-in",
          crossPlay: "cross-generation",
        },
        connectionModes: [{ type: "peer-to-peer" }],
        notes: [
          "You need to finish the tutorial mission to unlock co-op mode.",
          "Progress is only saved on the host, but there's no requirement of both players to be at the same point in the story or level.",
        ],
      },
      {
        name: "Far Cry 5",
        method: {
          type: "built-in",
          crossPlay: "cross-generation",
        },
        connectionModes: [{ type: "peer-to-peer" }],
        notes: [
          "You need to finish the tutorial mission on the first island to unlock co-op mode.",
          "Progress is only saved on the host, but there's no requirement of both players to be at the same point in the story or level.",
        ],
      },
      {
        name: "Far Cry New Dawn",
        method: {
          type: "built-in",
          crossPlay: "cross-generation",
        },
        connectionModes: [{ type: "peer-to-peer" }],
        notes: [
          "You need to finish the tutorial mission to unlock co-op mode.",
          "Progress is only saved on the host, but there's no requirement of both players to be at the same point in the story or level.",
        ],
      },
      {
        name: "Far Cry 6",
        method: {
          type: "built-in",
          crossPlay: "cross-generation",
          crossProgression: true,
        },
        connectionModes: [{ type: "peer-to-peer" }],
        notes: [
          "You need to finish the tutorial mission to unlock co-op mode.",
          "Progress is only saved on the host, but there's no requirement of both players to be at the same point in the story or level.",
        ],
      },
    ],
  },
  {
    series: "Dark Souls",
    games: [
      {
        name: "Dark Souls: Remastered",
        method: {
          type: "mod",
          name: "Seamless Co-op",
          href: "https://www.nexusmods.com/darksoulsremastered/mods/899",
        },
        connectionModes: [{ type: "peer-to-peer" }],
      },
      {
        name: "Dark Souls 2",
        method: {
          type: "built-in",
        },
        connectionModes: [{ type: "peer-to-peer" }],
      },
      {
        name: "Dark Souls 3",
        method: {
          type: "mod",
          name: "Seamless Co-op",
          href: "https://www.nexusmods.com/darksouls3/mods/1895",
        },
        connectionModes: [{ type: "peer-to-peer" }],
      },
    ],
  },
  {
    series: "Hazelight Studios",
    games: [
      {
        name: "A Way Out",
        method: {
          type: "built-in",
          friendPass: true,
          crossPlay: "cross-generation",
        },
        connectionModes: [{ type: "peer-to-peer" }, { type: "split-screen" }],
        notes: [
          "On PC, the friend pass is only available from the EA app, but you can still play with someone who owns the game on Steam or other storefronts.",
        ],
      },
      {
        name: "It Takes Two",
        method: {
          type: "built-in",
          friendPass: true,
          crossPlay: "cross-generation",
        },
        connectionModes: [{ type: "peer-to-peer" }, { type: "split-screen" }],
        notes: [
          "On PC, the friend pass is only available from the EA app, but you can still play with someone who owns the game on Steam or other storefronts.",
        ],
      },
      {
        name: "Split Fiction",
        method: {
          type: "built-in",
          friendPass: true,
          crossPlay: "cross-generation",
        },
        connectionModes: [{ type: "peer-to-peer" }, { type: "split-screen" }],
        notes: [
          "On PC, the friend pass is only available from the EA app, but you can still play with someone who owns the game on Steam or other storefronts.",
        ],
      },
    ],
  },
  {
    series: "Minecraft",
    games: [
      {
        name: "Minecraft: Bedrock Edition",
        method: {
          type: "built-in",
          crossPlay: "cross-platform",
        },
        connectionModes: [
          { type: "cloud-server", paid: true },
          { type: "self-hosted-server" },
          { type: "peer-to-peer" },
          { type: "split-screen", platforms: ["Xbox", "PlayStation"] },
        ],
      },
      {
        name: "Minecraft: Java Edition",
        method: {
          type: "built-in",
        },
        connectionModes: [
          { type: "cloud-server", paid: true },
          { type: "self-hosted-server" },
          {
            type: "peer-to-peer",
            mod: { name: "Essential.gg", href: "https://essential.gg/en" },
          },
          {
            type: "split-screen",
            mod: {
              name: "Controlify",
              href: "https://modrinth.com/mod/controlify",
            },
          },
        ],
        notes: [
          "Hypixel offers private vanilla SMP for VIP+ members (one-time-purchase)at no additional cost.",
          "[Exaroton](https://exaroton.com/:en/) offers Minecraft hosting with mod support that is billed on a per hour basis when the server is active/online.",
        ],
      },
      {
        name: "Minecraft Dungeons",
        method: {
          type: "built-in",
          crossPlay: "cross-platform",
        },
        connectionModes: [{ type: "peer-to-peer" }, { type: "split-screen" }],
      },
      {
        name: "Minecraft Legends",
        method: {
          type: "built-in",
          crossPlay: "cross-platform",
        },
        connectionModes: [{ type: "peer-to-peer" }, { type: "split-screen" }],
      },
    ],
  },
  {
    series: "PowerWash Simulator",
    games: [
      {
        name: "PowerWash Simulator",
        method: {
          type: "built-in",
          crossPlay: ["PC", "Xbox"],
        },
        connectionModes: [{ type: "peer-to-peer" }],
      },
      {
        name: "PowerWash Simulator 2",
        method: {
          type: "built-in",
          crossPlay: ["PC", "Xbox"],
        },
        connectionModes: [{ type: "peer-to-peer" }, { type: "split-screen" }],
      },
    ],
  },
  {
    series: "Half Life",
    games: [
      {
        name: "Half-Life",
        includes: ["Half-Life: Blue Shift", "Half-Life: Opposing Force"],
        method: {
          type: "mod",
          name: "Sven Co-op",
          href: "https://store.steampowered.com/app/225840/Sven_Coop/",
        },
        connectionModes: [{ type: "peer-to-peer" }],
        notes: ["You don't need to own Half-Life to play Sven Co-op."],
      },
      {
        name: "Black Mesa",
        method: {
          type: "mod",
          name: "SourceCoop",
          href: "https://github.com/ampreeT/SourceCoop",
        },
        connectionModes: [{ type: "self-hosted-server" }],
      },
      {
        name: "Half Life 2",
        includes: ["Half-Life 2: Episode One", "Half-Life 2: Episode Two"],
        method: {
          type: "mod",
          name: "Synergy",
          href: "https://store.steampowered.com/app/17520/Synergy/",
        },
        connectionModes: [{ type: "self-hosted-server" }],
      },
    ],
  },

  {
    series: "Call of Duty: Zombies (Treyarch)",
    games: [
      {
        name: "Call of Duty: World at War",
        method: {
          type: "built-in",
        },
        connectionModes: [{ type: "peer-to-peer" }],
      },
      {
        name: "Call of Duty: Black Ops",
        method: {
          type: "built-in",
        },
        connectionModes: [{ type: "peer-to-peer" }],
      },
      {
        name: "Call of Duty: Black Ops 2",
        method: {
          type: "built-in",
        },
        connectionModes: [{ type: "peer-to-peer" }],
      },
      {
        name: "Call of Duty: Black Ops 3",
        method: {
          type: "built-in",
        },
        connectionModes: [{ type: "peer-to-peer" }],
        notes: [
          "It is recommended to use [t7patch](https://github.com/shiversoftdev/t7patch) to prevent exploits.",
          "Though, this isn't necessary since you're playing with a friend, unless they're a massive dick.",
        ],
      },
      {
        name: "Call of Duty: Black Ops 4",
        method: {
          type: "built-in",
        },
        connectionModes: [{ type: "peer-to-peer" }],
      },
      {
        name: "Call of Duty: Black Ops Cold War",
        method: {
          type: "built-in",
        },
        connectionModes: [{ type: "cloud-server" }],
      },
      {
        name: "Call of Duty: Black Ops 6",
        method: {
          type: "built-in",
          crossPlay: "cross-platform",
        },
        connectionModes: [{ type: "cloud-server" }],
      },
      {
        name: "Call of Duty: Black Ops 7",
        method: {
          type: "built-in",
          crossPlay: "cross-platform",
        },
        connectionModes: [{ type: "cloud-server" }],
      },
    ],
  },
  {
    series: "Borderlands",
    games: [
      {
        name: "Borderlands 1",
        method: {
          type: "built-in",
        },
        connectionModes: [{ type: "peer-to-peer" }],
      },
      {
        name: "Borderlands 2",
        method: {
          type: "built-in",
        },
        connectionModes: [{ type: "peer-to-peer" }],
        notes: [
          "If you're on Windows and playing with someone on macOS/Linux, you need to downgrade your version as the macOS/Linux versions are effectively abandoned.",
          "If they're on Linux, they can enable Proton for the game to get the latest version.",
        ],
      },
      {
        name: "Borderlands 3",
        method: {
          type: "built-in",
        },
        connectionModes: [{ type: "peer-to-peer" }],
        notes: [
          "If you're on Windows and playing someone on Linux, they need to enable Proton to get the latest version.",
        ],
      },
      {
        name: "Borderlands: The Pre-Sequel",
        method: {
          type: "built-in",
        },
        connectionModes: [{ type: "peer-to-peer" }],
      },
    ],
  },
];
