import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import SellForm from "../ui/sell/SellForm";
import { getCategoriesWithoutDescription } from "../lib/data";

const SellPage = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const assetCategories = await getCategoriesWithoutDescription();

  return <SellForm user={user} assetCategories={assetCategories}></SellForm>;
};

export default SellPage;
// if (!user) {
//   throw new Error("Unauthorized");
// }
