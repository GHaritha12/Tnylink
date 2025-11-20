import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  const links = await prisma.link.findMany({
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(links);
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body?.targetUrl) {
    return NextResponse.json(
      { error: "Invalid data" },
      { status: 400 }
    );
  }

  const link = await prisma.link.create({
    data: {
      code: body.code,
      targetUrl: body.targetUrl,
    },
  });

  return NextResponse.json(link);
}
