import { chatModel, validateApiKey } from "../config";
import { HumanMessage } from "@langchain/core/messages";
import { NextResponse } from "next/server";

// Notice we are now using a POST request
export async function POST(req: Request) {
  // Performing API key validation
  const authorizationHeader = req.headers.get("Authorization") || "";
  const apiKey = authorizationHeader.replace("Bearer ", "");
  const validationResult = validateApiKey(apiKey);
  if (!validationResult.valid) {
    return NextResponse.json(
      { message: validationResult.error },
      { status: 401 }
    );
  }

  // Get the message from the request body
  const { message } = await req.json();
  if (typeof message !== "string") throw new Error("Invalid message");

  // Invoke the model with the message
  const result = await chatModel.invoke([new HumanMessage(message)]);

  // Displaying intermediate result from langchain's invoke method
  console.log(result);

  // Some guard to ensure content is always a string
  const { content } = result;
  if (typeof content !== "string")
    throw new Error("Invalid response from model");

  // Returning the response back to the client
  return Response.json({
    content,
  });
}
