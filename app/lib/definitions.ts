import { type AssetCategory, type Filter } from "@prisma/client";

export type AssetCategoryWithoutDescription = Pick<
  AssetCategory,
  "id" | "name"
>;

export type FilterWithoutCategoryId = Pick<Filter, "id" | "name">;
