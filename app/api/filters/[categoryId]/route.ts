import prisma from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { categoryId: string } }
) {
  try {
    const categoryId = params.categoryId;
    // console.log(categoryId);

    const data = await prisma.filter.findMany({
      where: { categoryId: Number(categoryId) },
      include: { filterOptions: true },
    });

    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
