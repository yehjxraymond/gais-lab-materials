import { ChatOpenAI } from "@langchain/openai";

// Generalizing the Chat models means you can swap out the different models
export type SupportedChatModels = ChatOpenAI;

const openRouterModel = new ChatOpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  configuration: {
    baseURL: "https://openrouter.ai/api/v1/",
  },
  // Optionally set a model, obtained from https://openrouter.ai/models
  // model: "google/gemma-7b-it:free",
});

export const chatModel: SupportedChatModels = openRouterModel;

export const validateApiKey = (apiKey: string) => {
  const validApiKey = process.env.GLOBAL_API_KEY;
  if (!validApiKey) {
    return { valid: false, error: "API key not set" };
  }
  if (apiKey !== validApiKey) {
    return { valid: false, error: "Invalid API key" };
  }
  return { valid: true };
};
