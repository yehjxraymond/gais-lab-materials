"use client";

import { FunctionComponent, useState } from "react";
import { useDebounce } from "use-debounce";
import { useHelloWorld } from "./useHelloWorld";
import { Input } from "@/components/ui/input";

export const TestHello: FunctionComponent = () => {
  const [name, setName] = useState<string>();
  const [debouncedName] = useDebounce(name, 2000);
  const query = useHelloWorld({ name: debouncedName });

  if (query.isFetching) return <div>Loading...</div>;
  if (query.isError) return <div>Error: {query.error.message}</div>;

  return (
    <div className="max-w-2xl space-y-2 p-2 border rounded-md mt-8">
      <Input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div className="p-2 border rounded-md">
        <div className="text-xl mb-4">Server Response</div>
        <div>
          <span className="font-semibold">Content:</span> {query.data?.content}
        </div>
        <div>
          <span className="font-semibold">Response ID:</span> {query.data?.id}
        </div>
      </div>
    </div>
  );
};
