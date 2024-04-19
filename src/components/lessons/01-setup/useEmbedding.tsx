import { authenticatedAxios } from "@/lib/authenticatedAxios";
import { betterAxiosError } from "@/lib/betterAxiosError";
import { useMutation } from "@tanstack/react-query";

interface EmbeddingResponse {
  embedding: number[];
}

const postEmbedding = betterAxiosError(
  async (body: { message: string }) => {
    const { data } = await authenticatedAxios.post<EmbeddingResponse>(
      "/api/lessons/01-setup/embedding",
      body
    );
    return data;
  }
);

export const useEmbedding = () => {
  return useMutation({
    mutationFn: postEmbedding,
  });
};
