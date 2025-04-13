export const siteConfig = {
  name: "EAS Pulse",
  url: "https://www.easpulse.com",
  description: "Surface Alpha for Attestations",
  baseLinks: {
    home: "/",
    arbitrum: {
      overview: "/arbitrum/overview",
      trends: "/arbitrum/trends",
    },
    base: {
      overview: "/base/overview",
      trends: "/base/trends",
    },
    celo: {
      overview: "/celo/overview",
      trends: "/celo/trends",
    },
    ethereum: {
      overview: "/ethereum/overview",
      trends: "/ethereum/trends",
    },
    linea: {
      overview: "/linea/overview",
      trends: "/linea/trends",
    },
    nova: {
      overview: "/nova/overview",
      trends: "/nova/trends",
    },
    optimism: {
      overview: "/optimism/overview",
      trends: "/optimism/trends",
    },
    polygon: {
      overview: "/polygon/overview",
      trends: "/polygon/trends",
    },
    scroll: {
      overview: "/scroll/overview",
      trends: "/scroll/trends",
    },
    zksync: {
      overview: "/zksync/overview",
      trends: "/zksync/trends",
    },
    coinbase: {
      overview: "/coinbase/overview",
      trends: "/coinbase/trends",
    },
    gitcoin: {
      overview: "/gitcoin/overview",
      trends: "/gitcoin/trends",
    },
    passport: {
      overview: "/passport/overview",
      trends: "/passport/trends",
      revenue: "/passport/revenue",
    },
    collective: {
      overview: "/collective/overview",
      trends: "/collective/trends",
    },
    clique: {
      overview: "/clique/overview",
      trends: "/clique/trends",
    },
    attest: {
      overview: "/fest/overview",
      trends: "/fest/trends",
    },
    bountycaster: {
      overview: "/bountycaster/overview",
      trends: "/bountycaster/trends",
    },
    coordinape: {
      overview: "/coordinape/overview",
      trends: "/coordinape/trends",
    },
    all: {
      overview: "/all/overview",
      trends: "/all/trends",
    },
  },
};

export type SiteConfigType = typeof siteConfig;
