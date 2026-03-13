import { NextRequest, NextResponse } from "next/server";

const BUTTONDOWN_API_URL = "https://api.buttondown.com/v1/subscribers";

function isValidEmail(email: string): boolean {
  if (!email) return false;
  const trimmed = email.trim();
  if (trimmed.length > 254) return false;

  // Simple RFC‑style check that filters out most junk input.
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(trimmed);
}

export async function POST(request: NextRequest) {
  try {
    const { email } = (await request.json()) as { email?: string };

    if (!email || typeof email !== "string" || !isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const apiKey = process.env.BUTTONDOWN_API_KEY;

    if (!apiKey) {
      console.error("BUTTONDOWN_API_KEY is not set.");
      return NextResponse.json(
        { error: "Subscription service is not configured." },
        { status: 500 }
      );
    }

    const response = await fetch(BUTTONDOWN_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Token ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_address: email.trim(),
        tags: ["stratos-early-access"],
      }),
    });

    if (!response.ok) {
      const text = await response.text().catch(() => "");
      console.error(
        "Buttondown subscription error",
        response.status,
        response.statusText,
        text
      );

      return NextResponse.json(
        {
          error:
            "We couldn’t add you to the list. Please try again in a few minutes.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Early access route error", error);
    return NextResponse.json(
      { error: "Unexpected error. Please try again later." },
      { status: 500 }
    );
  }
}

