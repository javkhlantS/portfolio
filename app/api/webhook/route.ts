import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const apiKey = request.headers.get("x-webhook-api-key");
    if (apiKey !== process.env.WEBHOOK_API_KEY) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const { table } = await request.json();

    revalidateTag(table, {});

    return NextResponse.json({ message: "Revalidated" });
}
