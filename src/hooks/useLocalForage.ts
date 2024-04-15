import localforage from "localforage";
import { useState, useEffect } from "react";

export const useLocalForage = <T>(key: string, initialValue: T | null) => {
  const [value, setValue] = useState<T | null>(initialValue);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    localforage.getItem<T>(key).then((data) => {
      setValue(data);
      setLoading(false);
    });
  }, [key]);

  const set = (newValue: any) => {
    setValue(newValue);
    localforage.setItem(key, newValue);
  };

  return { value, set, loading };
};
