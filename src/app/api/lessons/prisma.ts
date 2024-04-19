import { PrismaVectorStore } from "@langchain/community/vectorstores/prisma";
import { Document, Prisma, PrismaClient } from "@prisma/client";
import { embeddingModel } from "./config";

export const prisma = new PrismaClient();

// Use the `withModel` method to get proper type hints for `metadata` field:
// From: https://js.langchain.com/docs/integrations/vectorstores/prisma
export const vectorStore = PrismaVectorStore.withModel<Document>(prisma).create(
  embeddingModel, // automatically embeds the content using the embedding model in config
  {
    prisma: Prisma,
    tableName: "Document",
    vectorColumnName: "vector",
    columns: {
      id: PrismaVectorStore.IdColumn,
      content: PrismaVectorStore.ContentColumn,
    },
  }
);
