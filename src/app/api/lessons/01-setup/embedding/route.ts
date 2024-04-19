import { embeddingModel } from "../../config";
import { withRequestValidation } from "../../validation";

// Notice we are now using a POST request
export const POST = withRequestValidation(async (req: Request) => {
  // Get the message from the request body
  const { message } = await req.json();
  if (typeof message !== "string") throw new Error("Invalid message");

  // Invoke the model with the message
  console.log("Embedding", message);
  const result = await embeddingModel.embedQuery(message);

  // Displaying intermediate result from embedding query
  console.log(result);

  // Returning the response back to the client
  return Response.json({
    embedding: result,
  });
});
