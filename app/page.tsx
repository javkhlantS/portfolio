import HeroSection from "@/components/hero";
import ProjectsSection from "@/components/projects";
import ServicesSection from "@/components/services";
import { Suspense } from "react";

export default function Home() {
    return (
        <>
            <HeroSection />
            <ServicesSection />
            <Suspense fallback={<div>Loading...</div>}>
                <ProjectsSection />
            </Suspense>
        </>
    );
}
