import prisma from "@/app/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";
import { userRoles } from "@/lib/constants";

export async function GET() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || user === null || !user.id) {
    throw new Error("Something went wrong...");
  }

  let dbUser = await prisma.user.findUnique({ where: { id: user.id } });

  if (!dbUser) {
    dbUser = await prisma.user.create({
      data: {
        id: user.id,
        username: user.email?.split("@")[0] ?? "",
        email: user.email ?? "",
        profileImageUrl:
          user.picture ??
          `https://avatar.vercel.sh/${user.email?.split("@")[0]}`,
        roles: {
          create: [
            {
              role: {
                connect: {
                  id: userRoles.BUYER_ROLE_ID,
                },
              },
            },
          ],
        },
      },
    });
  }

  return NextResponse.redirect("http://localhost:3000/");
}
