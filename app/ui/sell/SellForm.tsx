"use client";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SelectCategory from "./SelectCategory";
import { type KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import { LoginAlert } from "./LoginAlert";
import {
  type FilterWithoutCategoryId,
  type AssetCategoryWithoutDescription,
} from "@/app/lib/definitions";
import { createAsset } from "@/app/lib/actions";
import ConfigureFilters from "./ConfigureFilters";

const SellForm = ({
  user,
  assetCategories,
}: {
  user: KindeUser | null;
  assetCategories: AssetCategoryWithoutDescription[];
}) => {
  const [open, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    if (!user) {
      setOpen(true);
    }
  }, [user]);

  return (
    <>
      {open && <LoginAlert onOpenChange={() => setOpen(!open)} />}
      <div className=" h-[calc(100vh-65px)] p-4">
        <Card className="border-blue-50/5 bg-transparent text-blue-50 border-none rounded h-full">
          <CardHeader>
            <CardTitle className="h6">Create an Asset</CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            <form action={createAsset}>
              <SelectCategory
                assetCategories={assetCategories}
                onCategoryChange={(value: string) => setSelectedCategory(value)}
              />
              {selectedCategory && (
                <ConfigureFilters selectedCategory={selectedCategory} />
              )}
              <button type="submit" className="btn bg-blue-50/10 mt-2">
                Create Asset
              </button>
            </form>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </div>
    </>
  );
};

export default SellForm;
