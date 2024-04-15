import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const name = request.nextUrl.searchParams.get("name");
  return Response.json({
    id: (Math.random() * 100000).toFixed(),
    content: name ? `Hello ${name}` : "Hello World!",
  });
}
