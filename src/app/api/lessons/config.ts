import { HuggingFaceInferenceEmbeddings } from "@langchain/community/embeddings/hf";
import { ChatOpenAI } from "@langchain/openai";

// Generalizing the Chat models means you can swap out the different models
export type SupportedChatModels = ChatOpenAI;
export type SupportedEmbeddingModels = HuggingFaceInferenceEmbeddings;

const openRouterModel = new ChatOpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  configuration: {
    baseURL: "https://openrouter.ai/api/v1/",
  },
  // Optionally set a model, obtained from https://openrouter.ai/models
  // model: "google/gemma-7b-it:free",
});

const huggingFaceEmbedding = new HuggingFaceInferenceEmbeddings({
  apiKey: process.env.HUGGING_FACE_API_KEY,
  model: "sentence-transformers/all-MiniLM-L6-v2",
});

export const chatModel: SupportedChatModels = openRouterModel;
export const embeddingModel: SupportedEmbeddingModels = huggingFaceEmbedding;
export const apiKey = process.env.GLOBAL_API_KEY;