import { NextRequest, NextResponse } from "next/server";

const DOOR_PASSWORD = process.env.DOOR_PASSWORD;

export async function GET(request: NextRequest) {
  const door = request.nextUrl.searchParams.get("door");

  if (!door || door !== DOOR_PASSWORD) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  const response = NextResponse.redirect(new URL("/", request.url));

  response.cookies.set("admin-door", "granted", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24,
  });

  return response;
}