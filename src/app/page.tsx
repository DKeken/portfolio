import { Hero } from "@/components/hero";
import { Vacancy } from "@/components/vacancy";
import { Technologies } from "@/components/technologies";
import { AdditionalInfo } from "@/components/additional-info";
import { Portfolio } from "@/components/portfolio";
import { Footer } from "@/components/footer";

export default async function Main() {
  return (
    <main className="min-h-screen">
      <Hero />
      <div className="space-y-24 pb-24">
        <AdditionalInfo />
        <Portfolio />
        <Vacancy />
        <Technologies />
      </div>
      <Footer />
    </main>
  );
}
