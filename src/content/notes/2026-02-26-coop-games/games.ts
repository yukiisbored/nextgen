type ModMethod = {
  type: "mod";
  name: string;
  href: string;
};

type CrossPlay = "cross-platform" | "inter-generation";

type BuiltInMethod = {
  type: "built-in";
  friendPass?: true;
  crossPlay?: CrossPlay;
};

type Method = ModMethod | BuiltInMethod;

type ConnectionMode =
  | { type: "server" }
  | { type: "split-screen"; mod?: Omit<ModMethod, "type"> }
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
    name: "DOOM",
    includes: ["DOOM II"],
    method: {
      type: "built-in",
    },
    connectionModes: [{ type: "server" }],
  },
  {
    name: "A Way Out",
    method: {
      type: "built-in",
      friendPass: true,
      crossPlay: "inter-generation",
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
      crossPlay: "inter-generation",
    },
    connectionModes: [{ type: "peer-to-peer" }, { type: "split-screen" }],
    notes: [
      "On PC, the friend pass is only available from the EA app, but you can still play with someone who owns the game on Steam or other storefronts.",
    ],
  },
  {
    name: "Minecraft",
    method: {
      type: "built-in",
    },
    connectionModes: [
      { type: "server" },
      {
        type: "peer-to-peer",
        mod: { name: "Essential.gg", href: "https://essential.gg/en" },
      },
    ],
    notes: [
      "Hypixel offers private vanilla SMP for VIP+ members (one-time-purchase)at no additional cost.",
      "[Exaroton](https://exaroton.com/:en/) offers Minecraft hosting with mod support that is billed on a per hour basis when the server is active/online.",
    ],
  },
  {
    name: "Hytale",
    method: {
      type: "built-in",
    },
    connectionModes: [{ type: "server" }, { type: "peer-to-peer" }],
    notes: [
      "[Exaroton](https://exaroton.com/:en/) offers Hypixel hosting with mod support that is billed on a per hour basis when the server is active/online.",
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
        connectionModes: [{ type: "server" }],
      },
      {
        name: "Half Life 2",
        includes: ["Half-Life 2: Episode One", "Half-Life 2: Episode Two"],
        method: {
          type: "mod",
          name: "Synergy",
          href: "https://store.steampowered.com/app/17520/Synergy/",
        },
        connectionModes: [{ type: "server" }],
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
        connectionModes: [{ type: "peer-to-peer" }],
      },
      {
        name: "Call of Duty: Black Ops 6",
        method: {
          type: "built-in",
          crossPlay: "cross-platform",
        },
        connectionModes: [{ type: "peer-to-peer" }],
      },
      {
        name: "Call of Duty: Black Ops 7",
        method: {
          type: "built-in",
          crossPlay: "cross-platform",
        },
        connectionModes: [{ type: "peer-to-peer" }],
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
