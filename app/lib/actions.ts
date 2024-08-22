"use server";

import { filtersByCategoryId } from "@/lib/constants";
// import prisma from "./db";

export async function createAsset(formData: FormData) {
  console.log("From server action", formData.get("asset-category"), typeof formData.get("asset-category"));
  const assetCategory = Number(formData.get("asset-category"));
  const filters = filtersByCategoryId[assetCategory];
  console.log(filters);
  
}

// console.log(
//   "Checking API filter templatetype",
//   formData.getAll("templatetype")
// );
// console.log("Checking API filter format", formData.getAll("format"));
// console.log("Checking API filter industry", formData.getAll("industry"));
// console.log(
//   "Checking API filter softwarecompatibility",
//   formData.getAll("softwarecompatibility")
// );
// console.log(
//   "Checking API filter designstyle",
//   formData.getAll("designstyle")
// );
// console.log("Checking API filter SOAP",formData.get("soap"));