import { Project } from "@/@types";
import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function GET() {
    const client = await createClient();
    const { data: projects } = (await client
        .from("projects")
        .select()
        .eq("status", "published")
        .order("order", { ascending: true })) as { data: Project[] | null };

    return NextResponse.json(projects);
}
