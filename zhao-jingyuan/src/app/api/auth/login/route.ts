import { NextRequest, NextResponse } from "next/server";

const USERNAME = "ocbc_gdo";
const PASSWORD = "ocbc_gdo";
const SESSION_TOKEN = "ocbc_gdo_authenticated";

export async function POST(request: NextRequest) {
  const { username, password } = await request.json();

  if (username === USERNAME && password === PASSWORD) {
    const response = NextResponse.json({ success: true });
    response.cookies.set("session", SESSION_TOKEN, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 8, // 8 hours
      path: "/",
    });
    return response;
  }

  return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
}
