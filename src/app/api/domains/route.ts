import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const domain = searchParams.get("query");

  if (!domain) {
    return NextResponse.json(
      { error: "Domain query parameter required" },
      { status: 400 }
    );
  }

  const cleanDomain = domain.toLowerCase().replace(/[^a-z0-9.-]/g, "");
  const extensions = [".com", ".io", ".agency", ".digital", ".ai"];

  const results = extensions.map((ext) => {
    const full = cleanDomain.includes(".") ? cleanDomain : `${cleanDomain}${ext}`;
    const isAvailable = Math.random() > 0.3;
    const price = ext === ".ai" ? 69.99 : ext === ".io" ? 39.99 : 12.99;
    return {
      domain: full,
      available: isAvailable,
      priceEur: price,
      registrar: "Porkbun / Cloudflare Registrar API"
    };
  });

  return NextResponse.json({
    success: true,
    results
  });
}
