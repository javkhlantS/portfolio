export type Project = {
    id: number;
    created_at: string;
    picture_url: string;
    title: string;
    description: string | null;
    year: string | null;
    role: string | null;
    live_url: string | null;
    github_url: string | null;
    alt_picture_url: string | null;
};

export type SocialUrl = {
    linkedin: string | null;
    github: string | null;
    twitter: string | null;
    instagram: string | null;
};
