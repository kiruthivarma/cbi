import { NotificationBar } from "@/components/NotificationBar";
import { Hero } from "@/components/Hero";
import { FeaturesGrid } from "@/components/FeaturesGrid";
import { HowItWorks } from "@/components/HowItWorks";
import { FeatureDeepDive } from "@/components/FeatureDeepDive";
import { NoNewsSection } from "@/components/NoNewsSection";
import { Deliverables } from "@/components/Deliverables";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-navy-950 text-white selection:bg-neon-green/30">
      <NotificationBar />
      <Hero />
      <HowItWorks />
      <FeaturesGrid />
      <FeatureDeepDive />
      <NoNewsSection />
      <Deliverables />
    </main>
  );
}
