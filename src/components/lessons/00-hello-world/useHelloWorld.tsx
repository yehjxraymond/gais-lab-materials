import {
  useQuery
} from "@tanstack/react-query";
import axios from "axios";

interface HelloWorldResponse {
  id: string;
  content: string;
}

const helloWorld = async ({ name }: { name?: string }) => {
  const { data } = await axios.get<HelloWorldResponse>(
    name
      ? `/api/lessons/00-hello-world?name=${name}`
      : "/api/lessons/00-hello-world"
  );
  return data;
};

export const useHelloWorld = ({ name }: { name?: string }) => {
  const query = useQuery({
    queryFn: () => helloWorld({ name }),
    queryKey: ["hello-world", name],
  });
  return query;
};
