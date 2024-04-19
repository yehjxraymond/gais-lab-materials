import { withRequestValidation } from "../../validation";
import { prisma, vectorStore } from "../../prisma";

// List all documents in database for GET Request
export const GET = async (req: Request) => {
  const documents = await prisma.document.findMany();
  // Returning the response back to the client
  return Response.json({
    documents,
  });
};

// Create a new document in the database for POST Request
// Read: https://js.langchain.com/docs/integrations/vectorstores/prisma#setup
export const POST = withRequestValidation(async (req: Request) => {
  // Get the message from the request body
  const { document } = await req.json();
  if (typeof document !== "string") throw new Error("Invalid document");

  // Creating many document in a transaction to show multi-insertion
  const insertedDocumentWithoutEmbeddings = await prisma.$transaction([
    prisma.document.create({ data: { content: document } }),
  ]);
  // Add embeddings to the inserted documents
  await vectorStore.addModels(insertedDocumentWithoutEmbeddings);

  // Returning the response back to the client
  return Response.json(insertedDocumentWithoutEmbeddings[0]);
});
