import { Checkbox } from "@/components/ui/checkbox";
import React from "react";
import useSWR from "swr";

const fetcher = async (...args: Parameters<typeof fetch>): Promise<any> => {
  const response = await fetch(...args);
  return response.json();
};

const ConfigureFilters = ({
  selectedCategory,
}: {
  selectedCategory: string;
}) => {
  const { data } = useSWR(`/api/filters/${selectedCategory}`, fetcher);

  console.log(data);

  return (
    <div>
      {data &&
        data.map((item) => (
          <fieldset key={item.id}>
            <legend>{item.name}</legend>
            {item.filterOptions.map((i) => (
              <div key={i.id}>
                <label>
                  <input
                    type="checkbox"
                    name={item.name.toLowerCase().replace(/\s+/g, "")}
                    value={i.id}
                  />
                  {i.name}
                </label>
              </div>
            ))}
          </fieldset>
        ))}
    </div>
  );
};

export default ConfigureFilters;
