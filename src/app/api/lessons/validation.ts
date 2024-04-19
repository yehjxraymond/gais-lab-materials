import { NextRequest, NextResponse } from "next/server";

export const validateApiKey = (apiKey: string) => {
  const validApiKey = apiKey;
  if (!validApiKey) {
    return { valid: false, error: "API key not set" };
  }
  if (apiKey !== validApiKey) {
    return { valid: false, error: "Invalid API key" };
  }
  return { valid: true };
};

export type RequestHandler<T> = (
  request: NextRequest,
  context: T
) => Response | Promise<Response>;

export const withRequestValidation =
  <T>(requestHandler: RequestHandler<T>) =>
  async (request: NextRequest, context: T) => {
    // Performing API key validation
    const authorizationHeader = request.headers.get("Authorization") || "";
    const apiKey = authorizationHeader.replace("Bearer ", "");
    const validation = validateApiKey(apiKey);
    if (!validation.valid)
      return NextResponse.json({ message: validation.error }, { status: 401 });
    try {
      return await requestHandler(request, context);
    } catch (e) {
      console.error(e);
      return NextResponse.json(
        { message: "An unknown error has occurred" },
        { status: 500 }
      );
    }
  };
