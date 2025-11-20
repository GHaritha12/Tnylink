import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: { code: string } }
) {
  const link = await prisma.link.findUnique({
    where: { code: params.code },
  });

  if (!link) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(link);
}

export async function DELETE(
  request: Request,
  { params }: { params: { code: string } }
) {
  await prisma.link.delete({
    where: { code: params.code },
  });

  return NextResponse.json({ deleted: true });
}
