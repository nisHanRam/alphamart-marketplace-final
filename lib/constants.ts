export const userRoles = {
  BUYER_ROLE_ID: 1,
  SELLER_ROLE_ID: 2,
  ADMIN_ROLE_ID: 3,
};

export const filtersByCategoryId: Record<number, string[]> = {
  1: [
    "apitype",
    "programminglanguage",
    "authenticationmethod",
    "industry",
    "responseformat",
    "ratelimit(requests/min)",
  ],
  2: [
    "templatetype",
    "format",
    "industry",
    "softwarecompatibility",
    "designstyle",
  ],
  3: ["graphictype", "fileformat", "industry", "style"],
  4: ["softwaretype", "platform", "license", "supportedos"],
  5: ["extensiontype", "supportedbrowser"],
  6: ["ebookgenre", "format", "language"],
  7: ["coursetype", "subject", "level"],
  8: ["plugintype", "platform"],
  9: ["stockphototype", "resolution"],
  10: ["stockvideotype", "resolution", "duration"],
  11: ["musicgenre", "instrument", "duration"],
  12: ["soundeffecttype", "format"],
  13: ["digitalmarketingtooltype", "platform"],
};
