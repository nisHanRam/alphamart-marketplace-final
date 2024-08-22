import logo from "@/public/logo.svg";
import Image from "next/image";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

const Navigation = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  // console.log(user);

  return (
    <div className="flex justify-between p-4 border-b border-blue-50/10">
      <div className="flex items-center gap-4">
        <Image src={logo} height={32} alt="brand-logo" />
        <Separator orientation="vertical" className="bg-blue-50/10" />
        <ul className="flex justify-center items-center gap-4">
          <li>Explore Assets</li>
          {user && (
            <li>
              <Link href="/sell">Sell Assets</Link>
            </li>
          )}
        </ul>
      </div>
      {!user && <LoginLink className="btn bg-blue-50/10">Login</LoginLink>}
      {user && (
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage
                src={
                  user.picture ??
                  `https://avatar.vercel.sh/${user.email
                    ?.split("@")[0]
                    .slice(0, 3)}`
                }
              />
              <AvatarFallback>
                {user.email?.split("@")[0].slice(0, 3)}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-blue-50/50 p">{user.email}</p>
            </div>
          </div>
          <Separator orientation="vertical" className="bg-blue-50/10" />
          <LogoutLink className="btn bg-blue-50/10">Logout</LogoutLink>
        </div>
      )}
    </div>
  );
};

export default Navigation;
