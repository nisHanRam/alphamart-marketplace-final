import { AssetCategoryNameOnly } from "@/app/lib/definitions";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SelectCategory = ({
  assetCategories,
  onCategoryChange,
}: {
  assetCategories: AssetCategoryNameOnly[];
  onCategoryChange: (param: string) => void;
}) => {
  
  return (
    <Select name="asset-category" onValueChange={onCategoryChange}>
      <SelectTrigger className="bg-blue-50/5 border-none rounded">
        <SelectValue placeholder="Select Asset Category" />
      </SelectTrigger>
      <SelectContent className="bg-blue-50/5 text-bg-blue border-none rounded">
        {assetCategories.map((item) => (
          <SelectItem
            key={item.id}
            value={item.id.toString()}
            className="focus:bg-canvas focus:text-blue-50 focus:rounded"
          >
            {item.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SelectCategory;
