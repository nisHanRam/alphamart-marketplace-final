import prisma from "./db";

export async function getCategoriesWithoutDescription() {
  const data = await prisma.assetCategory.findMany({
    select: { id: true, name: true },
  });
  return data;
}

export async function getFiltersByCategory(categoryId: string) {
  const data = await prisma.filter.findMany({
    where: { categoryId: Number(categoryId) },
  });
  return data;
}
