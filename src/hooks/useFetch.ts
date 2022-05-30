import { useCallback, useState } from "react";

type Fetch = {
  url: string;
  options: RequestInit;
};

type Return<T> = {
  data: T | undefined;
  loading: boolean;
  request: (fetch: Fetch) => void;
};

export const useFetch = <T>(): Return<T> => {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(false);

  const request = useCallback(async ({ url, options }: Fetch) => {
    try {
      setLoading(true);
      const response = await requestFunction<T>(url, options);
      setData(response);
    } catch {
      setData(undefined);
    } finally {
      setLoading(false);
    }
  }, []);
  return { data, loading, request };
};

async function requestFunction<T>(
  url: string,
  options: RequestInit
): Promise<T> {
  return await fetch(url, options).then((data) => data.json());
}
