import { SocialUrl } from "@/@types";
import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function GET() {
    const client = await createClient();
    const { data: socialUrl } = (await client.from("social_url").select().single()) as {
        data: SocialUrl | null;
    };

    return NextResponse.json(socialUrl);
}
