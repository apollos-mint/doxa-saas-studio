import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { plan, billingCycle = "monthly", currency = "eur" } = body;

    const prices: Record<string, { monthly: number; yearly: number }> = {
      starter: { monthly: 49, yearly: 39 * 12 },
      pro: { monthly: 99, yearly: 79 * 12 },
      enterprise: { monthly: 249, yearly: 199 * 12 }
    };

    const selectedPrice = prices[plan?.toLowerCase()] || prices.pro;
    const amount = billingCycle === "yearly" ? selectedPrice.yearly : selectedPrice.monthly;

    return NextResponse.json({
      success: true,
      sessionId: `cs_test_${Date.now()}_${Math.random().toString(36).substring(7)}`,
      checkoutUrl: `https://checkout.stripe.com/pay/cs_test_${Date.now()}#doxa_demo`,
      plan,
      billingCycle,
      amount,
      currency
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Payment checkout initialization failed", details: error?.message },
      { status: 500 }
    );
  }
}
