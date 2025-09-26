import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const body = await req.json();
    // TODO: Verify signature if enabled using CALENDLY_WEBHOOK_SECRET

    const eventType = body?.event; // e.g. "invitee.created"
    const invitee = body?.payload?.invitee?.email;
    const start = body?.payload?.event?.start_time;

    // TODO: Save to DB, send email/Slack, etc.
    // await db.collection("meetings").insertOne({ eventType, invitee, start, raw: body });

    return NextResponse.json({ ok: true });
}
