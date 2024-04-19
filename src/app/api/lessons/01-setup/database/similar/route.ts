import { vectorStore } from "../../../prisma";
import { withRequestValidation } from "../../../validation";

// Create a new document in the database for POST Request
// Read: https://js.langchain.com/docs/integrations/vectorstores/prisma#setup
export const POST = withRequestValidation(async (req: Request) => {
  // Get the message from the request body
  const { document, k = 1 } = await req.json();
  if (typeof document !== "string") throw new Error("Invalid document");
  if (typeof k !== "number" || k <= 0 || k > 20) throw new Error("Invalid k");

  // Search for similar documents
  const results = await vectorStore.similaritySearchWithScore(document, k);

  // Returning the response back to the client
  return Response.json(results);
});
