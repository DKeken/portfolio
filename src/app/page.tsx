import { Separator } from "@/components/ui/separator";
import { Hero } from "@/components/hero";
import { Vacancy } from "@/components/vacancy";
import { Technologies } from "@/components/technologies";
import { AdditionalInfo } from "@/components/additional-info";
import { Portfolio } from "@/components/portfolio";
import { Footer } from "@/components/footer";

export default async function Main() {
  return (
    <main className="flex min-h-screen w-full flex-col">
      <section id="hero">
        <Hero />
      </section>
      <Separator className="w-full" />
      <section id="additional-info">
        <AdditionalInfo />
      </section>
      <Separator className="w-full" />
      <section id="portfolio">
        <Portfolio />
      </section>
      <Separator className="w-full" />
      <section id="vacancy">
        <Vacancy />
      </section>
      <Separator className="w-full" />
      <section id="technologies">
        <Technologies />
      </section>
      <Separator className="w-full" />
      <Footer />
    </main>
  );
}
