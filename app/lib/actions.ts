"use server";

import { filtersByCategoryId } from "@/lib/constants";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import prisma from "./db";

export async function createAsset(formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const assetCategory = Number(formData.get("asset-category"));
  const filters = filtersByCategoryId[assetCategory];

  let selectedFilterOptions: string[] = [];
  filters.forEach((item) => {
    const options = formData.getAll(item) as string[];
    selectedFilterOptions = [...selectedFilterOptions, ...options];
  });

  if (user) {
    await prisma.asset.create({
      data: {
        name: formData.get("asset-name") as string,
        description: formData.get("asset-description") as string,
        userId: user?.id,
        assetCategoryId: Number(formData.get("asset-category")),
        filterOptions: {
          create: selectedFilterOptions.map((item) => {
            return { filterOption: { connect: { id: Number(item) } } };
          }),
        },
      },
    });
  }
}
