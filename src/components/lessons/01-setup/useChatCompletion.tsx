import { authenticatedAxios } from "@/lib/authenticatedAxios";
import { betterAxiosError } from "@/lib/betterAxiosError";
import { useMutation } from "@tanstack/react-query";

interface ChatCompletionResponse {
  content: string;
}

const postChatCompletion = betterAxiosError(
  async (body: { message: string; model?: string }) => {
    const { data } = await authenticatedAxios.post<ChatCompletionResponse>(
      "/api/lessons/01-setup/llm",
      body
    );
    return data;
  }
);

export const useChatCompletion = () => {
  return useMutation({
    mutationFn: postChatCompletion,
  });
};
