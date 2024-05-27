import { useEffect, useState } from "react";
import { DefaultValueAsFunctoin, DefaultValueType } from "./LocalStoreProps";

export const useLocalStore = (
  key: string,
  defaultValue: DefaultValueAsFunctoin | DefaultValueType
) => {
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(key);
    if (jsonValue != null) {
      return JSON.parse(jsonValue);
    } else if (typeof defaultValue === "function") {
      return defaultValue();
    } else {
      return defaultValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
