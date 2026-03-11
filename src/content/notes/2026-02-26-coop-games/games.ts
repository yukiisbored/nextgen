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
  | { type: "self-hosted-server"; platforms?: Array<Platform> }
  | {
      type: "split-screen";
      mod?: Omit<ModMethod, "type">;
      platforms?: Array<Platform>;
    }
  | { type: "peer-to-peer"; mod?: Omit<ModMethod, "type"> };

type Features = {
  modSupport?: true;
};

export type Game = {
  includes?: Array<string>;
  method: Method;
  connectionModes: Array<ConnectionMode>;
  notes?: Array<string>;
  features?: Features;
};

export type Series = {
  games: Record<string, Game>;
};

export const games: Record<string, Game | Series> = {
  Factorio: {
    method: {
      type: "built-in",
    },
    connectionModes: [{ type: "self-hosted-server" }, { type: "peer-to-peer" }],
    features: {
      modSupport: true,
    },
  },
  "Don't Starve Together": {
    method: {
      type: "built-in",
    },
    connectionModes: [
      { type: "self-hosted-server" },
      { type: "peer-to-peer" },
      { type: "split-screen", platforms: ["Xbox", "PlayStation"] },
    ],
    features: {
      modSupport: true,
    },
  },
  "Baldur's Gate 3": {
    method: {
      type: "built-in",
      crossPlay: "cross-platform",
      crossProgression: true,
    },
    connectionModes: [{ type: "peer-to-peer" }],
  },
  "The Binding of Isaac: Repentance": {
    method: {
      type: "built-in",
    },
    connectionModes: [{ type: "peer-to-peer" }, { type: "split-screen" }],
    features: {
      modSupport: true,
    },
  },
  "Stardew Valley": {
    method: {
      type: "built-in",
      crossPlay: "cross-generation",
    },
    connectionModes: [{ type: "peer-to-peer" }, { type: "split-screen" }],
    features: {
      modSupport: true,
    },
  },
  "Portal 2": {
    method: {
      type: "built-in",
    },
    connectionModes: [{ type: "peer-to-peer" }],
    features: {
      modSupport: true,
    },
  },
  "Last Epoch": {
    method: {
      type: "built-in",
    },
    connectionModes: [{ type: "peer-to-peer" }],
  },
  "DOOM (1993)": {
    includes: ["DOOM II"],
    method: {
      type: "built-in",
    },
    connectionModes: [
      { type: "self-hosted-server", platforms: ["PC"] },
      { type: "split-screen", platforms: ["Xbox", "PlayStation"] },
    ],
    features: {
      modSupport: true,
    },
    notes: [
      "You can use [Zandronum](https://zandronum.com/) to play with more than 4 players and get better mod support.",
    ],
  },
  "NZ: Portable (COD Zombies Demake)": {
    method: {
      type: "built-in",
    },
    connectionModes: [{ type: "self-hosted-server" }],
  },
  Terraria: {
    method: { type: "built-in", crossPlay: "cross-generation" },
    connectionModes: [
      { type: "peer-to-peer" },
      { type: "split-screen", platforms: ["Xbox", "PlayStation"] },
    ],
    features: {
      modSupport: true,
    },
  },
  "Vintage Story": {
    method: {
      type: "built-in",
    },
    connectionModes: [{ type: "self-hosted-server" }],
    features: {
      modSupport: true,
    },
  },
  Satisfactory: {
    method: {
      type: "built-in",
      crossPlay: ["Xbox", "PlayStation"],
    },
    connectionModes: [{ type: "peer-to-peer" }, { type: "self-hosted-server" }],
    features: {
      modSupport: true,
    },
  },
  Barony: {
    method: {
      type: "built-in",
    },
    connectionModes: [{ type: "peer-to-peer" }, { type: "split-screen" }],
    features: {
      modSupport: true,
    },
  },
  Hytale: {
    method: {
      type: "built-in",
    },
    connectionModes: [{ type: "self-hosted-server" }, { type: "peer-to-peer" }],
    features: {
      modSupport: true,
    },
    notes: [
      "[Exaroton](https://exaroton.com/:en/) offers Hypixel hosting with mod support that is billed on a per hour basis when the server is active/online.",
    ],
  },
  "Halo: The Master Chief Collection": {
    includes: [
      "Halo: Combat Evolved",
      "Halo 2",
      "Halo 3",
      "Halo 3: ODST",
      "Halo: Reach",
      "Halo 4",
    ],
    method: {
      type: "built-in",
      crossPlay: "cross-platform",
    },
    connectionModes: [{ type: "peer-to-peer" }, { type: "split-screen" }],
  },
  "Super Mario 64": {
    method: {
      type: "mod",
      name: "sm64coopdx",
      href: "https://github.com/coop-deluxe/sm64coopdx",
    },
    connectionModes: [{ type: "peer-to-peer" }],
  },
  "Project Zomboid": {
    method: {
      type: "built-in",
    },
    connectionModes: [
      { type: "self-hosted-server" },
      { type: "peer-to-peer" },
      { type: "split-screen" },
    ],
    notes: [
      "If you're playing with a friend who bought it from a different store front (Steam, GOG), you need to start a server to play together.",
    ],
    features: {
      modSupport: true,
    },
  },
  "Helldivers 2": {
    method: {
      type: "built-in",
    },
    connectionModes: [{ type: "cloud-server" }],
  },
  Valheim: {
    method: {
      type: "built-in",
    },
    connectionModes: [{ type: "self-hosted-server" }],
  },
  "7 Days to Die": {
    method: {
      type: "built-in",
    },
    connectionModes: [{ type: "self-hosted-server" }],
  },
  "Tom Clancy's Ghost Recon Wildlands": {
    method: {
      type: "built-in",
    },
    connectionModes: [{ type: "peer-to-peer" }],
  },
  "Enter the Gungeon": {
    method: {
      type: "built-in",
    },
    connectionModes: [{ type: "split-screen" }],
  },
  Biped: {
    games: {
      Biped: {
        method: {
          type: "built-in",
          crossPlay: "cross-platform",
        },
        connectionModes: [{ type: "peer-to-peer" }],
      },
      "Biped 2": {
        method: {
          type: "built-in",
          crossPlay: "cross-platform",
        },
        connectionModes: [{ type: "peer-to-peer" }],
      },
    },
  },
  PAYDAY: {
    games: {
      "PAYDAY: The Heist": {
        method: {
          type: "built-in",
        },
        connectionModes: [{ type: "peer-to-peer" }],
      },
      "PAYDAY 2": {
        method: {
          type: "built-in",
        },
        connectionModes: [{ type: "peer-to-peer" }],
      },
    },
  },
  "Left 4 Dead": {
    games: {
      "Left 4 Dead": {
        method: {
          type: "built-in",
        },
        connectionModes: [{ type: "peer-to-peer" }],
      },
      "Left 4 Dead 2": {
        method: {
          type: "built-in",
        },
        connectionModes: [{ type: "peer-to-peer" }, { type: "split-screen" }],
        features: {
          modSupport: true,
        },
      },
    },
  },
  "Warhammer 40K": {
    games: {
      "Warhammer 40K: Rogue Trader": {
        method: {
          type: "built-in",
          crossPlay: "cross-platform",
        },
        connectionModes: [{ type: "peer-to-peer" }],
      },
      "Warhammer 40K: Space Hulk Deathwing": {
        method: {
          type: "built-in",
        },
        connectionModes: [{ type: "peer-to-peer" }],
      },
      "Warhammer 40K: Dawn of War": {
        method: {
          type: "built-in",
          crossPlay: "cross-platform",
        },
        connectionModes: [{ type: "peer-to-peer" }],
      },
      "Warhammer 40K: Battlefleet Gothic Armada II": {
        method: {
          type: "built-in",
          crossPlay: "cross-platform",
        },
        connectionModes: [{ type: "peer-to-peer" }],
      },
      "Warhammer 40K: Space Marine 2": {
        method: {
          type: "built-in",
          crossPlay: "cross-platform",
        },
        connectionModes: [{ type: "peer-to-peer" }],
      },
    },
  },
  "Monster Hunter": {
    games: {
      "Monster Hunter Rise": {
        method: {
          type: "built-in",
          crossPlay: "cross-generation",
        },
        connectionModes: [{ type: "peer-to-peer" }],
      },
      "Monster Hunter World": {
        method: {
          type: "built-in",
        },
        connectionModes: [{ type: "peer-to-peer" }],
      },
      "Monster Hunter Wilds": {
        method: {
          type: "built-in",
          crossPlay: "cross-platform",
        },
        connectionModes: [{ type: "peer-to-peer" }],
      },
    },
  },
  "Far Cry": {
    games: {
      "Far Cry 4": {
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
      "Far Cry 5": {
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
      "Far Cry New Dawn": {
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
      "Far Cry 6": {
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
    },
  },
  SYNTHETIK: {
    games: {
      "SYNTHETIK: Legion Rising": {
        method: {
          type: "built-in",
        },
        connectionModes: [{ type: "peer-to-peer" }],
      },
      "SYNTHETIK 2": {
        method: {
          type: "built-in",
        },
        connectionModes: [{ type: "peer-to-peer" }],
      },
    },
  },
  "Dark Souls": {
    games: {
      "Dark Souls: Remastered": {
        method: {
          type: "mod",
          name: "Seamless Co-op",
          href: "https://www.nexusmods.com/darksoulsremastered/mods/899",
        },
        connectionModes: [{ type: "peer-to-peer" }],
      },
      "Dark Souls 2": {
        method: {
          type: "built-in",
        },
        connectionModes: [{ type: "peer-to-peer" }],
      },
      "Dark Souls 3": {
        method: {
          type: "mod",
          name: "Seamless Co-op",
          href: "https://www.nexusmods.com/darksouls3/mods/1895",
        },
        connectionModes: [{ type: "peer-to-peer" }],
      },
    },
  },
  "Hazelight Studios": {
    games: {
      "A Way Out": {
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
      "It Takes Two": {
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
      "Split Fiction": {
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
    },
  },
  Minecraft: {
    games: {
      "Minecraft: Bedrock Edition": {
        method: {
          type: "built-in",
          crossPlay: "cross-platform",
        },
        connectionModes: [
          { type: "cloud-server", paid: true },
          { type: "self-hosted-server", platforms: ["PC"] },
          { type: "peer-to-peer" },
          { type: "split-screen", platforms: ["Xbox", "PlayStation"] },
        ],
        features: {
          modSupport: true,
        },
      },
      "Minecraft: Java Edition": {
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
        features: {
          modSupport: true,
        },
        notes: [
          "Hypixel offers private vanilla SMP for VIP+ members (one-time-purchase) at no additional cost.",
          "[Exaroton](https://exaroton.com/:en/) offers Minecraft hosting with mod support that is billed on a per hour basis when the server is active/online.",
        ],
      },
      "Minecraft Dungeons": {
        method: {
          type: "built-in",
          crossPlay: "cross-platform",
        },
        connectionModes: [{ type: "peer-to-peer" }, { type: "split-screen" }],
      },
      "Minecraft Legends": {
        method: {
          type: "built-in",
          crossPlay: "cross-platform",
        },
        connectionModes: [{ type: "peer-to-peer" }, { type: "split-screen" }],
      },
    },
  },
  "PowerWash Simulator": {
    games: {
      "PowerWash Simulator": {
        method: {
          type: "built-in",
          crossPlay: ["PC", "Xbox"],
        },
        connectionModes: [{ type: "peer-to-peer" }],
      },
      "PowerWash Simulator 2": {
        method: {
          type: "built-in",
          crossPlay: ["PC", "Xbox"],
        },
        connectionModes: [{ type: "peer-to-peer" }, { type: "split-screen" }],
      },
    },
  },
  "Half Life": {
    games: {
      "Half-Life": {
        includes: ["Half-Life: Blue Shift", "Half-Life: Opposing Force"],
        method: {
          type: "mod",
          name: "Sven Co-op",
          href: "https://store.steampowered.com/app/225840/Sven_Coop/",
        },
        connectionModes: [{ type: "peer-to-peer" }],
        features: {
          modSupport: true,
        },
        notes: ["You don't need to own Half-Life to play Sven Co-op."],
      },
      "Black Mesa": {
        method: {
          type: "mod",
          name: "SourceCoop",
          href: "https://github.com/ampreeT/SourceCoop",
        },
        connectionModes: [{ type: "self-hosted-server" }],
      },
      "Half Life 2": {
        includes: ["Half-Life 2: Episode One", "Half-Life 2: Episode Two"],
        method: {
          type: "mod",
          name: "Synergy",
          href: "https://store.steampowered.com/app/17520/Synergy/",
        },
        connectionModes: [{ type: "self-hosted-server" }],
      },
    },
  },
  "Call of Duty: Zombies (Treyarch)": {
    games: {
      "Call of Duty: World at War": {
        method: {
          type: "built-in",
        },
        connectionModes: [{ type: "peer-to-peer" }],
      },
      "Call of Duty: Black Ops": {
        method: {
          type: "built-in",
        },
        connectionModes: [{ type: "peer-to-peer" }],
      },
      "Call of Duty: Black Ops 2": {
        method: {
          type: "built-in",
        },
        connectionModes: [{ type: "peer-to-peer" }],
      },
      "Call of Duty: Black Ops 3": {
        method: {
          type: "built-in",
        },
        connectionModes: [{ type: "peer-to-peer" }],
        features: {
          modSupport: true,
        },
        notes: [
          "It is recommended to use [t7patch](https://github.com/shiversoftdev/t7patch) to prevent exploits.",
          "Though, this isn't necessary since you're playing with a friend, unless they're a massive dick.",
        ],
      },
      "Call of Duty: Black Ops 4": {
        method: {
          type: "built-in",
        },
        connectionModes: [{ type: "peer-to-peer" }],
      },
      "Call of Duty: Black Ops Cold War": {
        method: {
          type: "built-in",
        },
        connectionModes: [{ type: "cloud-server" }],
      },
      "Call of Duty: Black Ops 6": {
        method: {
          type: "built-in",
          crossPlay: "cross-platform",
        },
        connectionModes: [{ type: "cloud-server" }],
      },
      "Call of Duty: Black Ops 7": {
        method: {
          type: "built-in",
          crossPlay: "cross-platform",
        },
        connectionModes: [{ type: "cloud-server" }],
      },
    },
  },
  Diablo: {
    games: {
      Diablo: {
        method: {
          type: "mod",
          name: "DevilutionX",
          href: "https://github.com/diasurgical/DevilutionX",
        },
        connectionModes: [{ type: "self-hosted-server" }],
      },
      "Diablo II: Resurrected": {
        method: {
          type: "built-in",
          crossProgression: true,
        },
        connectionModes: [{ type: "peer-to-peer" }],
      },
      "Diablo III": {
        method: {
          type: "built-in",
        },
        connectionModes: [{ type: "peer-to-peer" }],
      },
      "Diablo IV": {
        method: {
          type: "built-in",
          crossPlay: "cross-platform",
          crossProgression: true,
        },
        connectionModes: [{ type: "peer-to-peer" }],
      },
    },
  },
  Borderlands: {
    games: {
      "Borderlands 1": {
        method: {
          type: "built-in",
        },
        connectionModes: [{ type: "peer-to-peer" }],
      },
      "Borderlands 2": {
        method: {
          type: "built-in",
        },
        connectionModes: [{ type: "peer-to-peer" }],
        notes: [
          "If you're on Windows and playing with someone on macOS/Linux, you need to downgrade your version as the macOS/Linux versions are effectively abandoned.",
          "If they're on Linux, they can enable Proton for the game to get the latest version.",
        ],
      },
      "Borderlands 3": {
        method: {
          type: "built-in",
        },
        connectionModes: [{ type: "peer-to-peer" }],
        notes: [
          "If you're on Windows and playing someone on Linux, they need to enable Proton to get the latest version.",
        ],
      },
      "Borderlands: The Pre-Sequel": {
        method: {
          type: "built-in",
        },
        connectionModes: [{ type: "peer-to-peer" }],
      },
    },
  },
};
