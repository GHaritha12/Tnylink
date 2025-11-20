import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    await prisma.$queryRaw`SELECT 1`;
    return NextResponse.json({ ok: true, version: "1.0" });
  } catch {
    return NextResponse.json(
      { ok: false, version: "1.0", error: "db unreachable" },
      { status: 500 }
    );
  }
}
