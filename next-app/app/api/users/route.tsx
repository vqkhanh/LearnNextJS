import { NextRequest, NextResponse } from "next/server";

export function GET() {
  return NextResponse.json([
    { id: 1, name: "khanh" },
    { id: 2, name: "john" },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  if (!body.name) return NextResponse.json({ error: "Name is required" });
  return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}
