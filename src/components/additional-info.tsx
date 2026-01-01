import { getTranslations } from "next-intl/server";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  FaGithub,
  FaCode,
  FaHeart,
  FaBullseye,
  FaLightbulb,
  FaArrowDown,
} from "react-icons/fa";
import Link from "next/link";
import { SOCIAL_LINKS } from "@/constants/links";
import { Motion } from "./ui/motion";

export async function AdditionalInfo() {
  const t = await getTranslations("additional_info");

  const items = [
    {
      title: t("about_me.title"),
      description: (
        <span className="text-sm md:text-base leading-relaxed text-muted-foreground">
          {t("about_me.description")}
        </span>
      ),
      header: (
        <div className="flex flex-1 w-full h-full min-h-[8rem] rounded-xl bg-gradient-to-br from-muted/50 to-muted/10 items-center justify-center border border-border/30 group-hover/bento:border-primary/20 transition-colors">
          <FaCode className="h-12 w-12 text-muted-foreground/30 group-hover/bento:text-primary/40 transition-colors" />
        </div>
      ),
      className: "md:col-span-2",
      icon: <FaCode className="h-5 w-5 text-muted-foreground group-hover/bento:text-primary transition-colors" />,
    },
    {
      title: t("approach.adaptability.title"),
      description: t("approach.adaptability.description"),
      header: (
        <div className="flex flex-1 w-full h-full min-h-[8rem] rounded-xl bg-gradient-to-br from-amber-500/10 to-transparent items-center justify-center border border-amber-500/10 group-hover/bento:border-amber-500/30 transition-colors">
          <FaLightbulb className="h-10 w-10 text-amber-500/50 group-hover/bento:text-amber-500/70 transition-colors" />
        </div>
      ),
      className: "md:col-span-1",
      icon: <FaLightbulb className="h-5 w-5 text-muted-foreground group-hover/bento:text-amber-500 transition-colors" />,
    },
    {
      title: t("approach.code_quality.title"),
      description: t("approach.code_quality.description"),
      header: (
        <div className="flex flex-1 w-full h-full min-h-[8rem] rounded-xl bg-gradient-to-br from-red-500/10 to-transparent items-center justify-center border border-red-500/10 group-hover/bento:border-red-500/30 transition-colors">
          <FaHeart className="h-10 w-10 text-red-500/50 group-hover/bento:text-red-500/70 transition-colors" />
        </div>
      ),
      className: "md:col-span-1",
      icon: <FaHeart className="h-5 w-5 text-muted-foreground group-hover/bento:text-red-500 transition-colors" />,
    },
    {
      title: t("approach.business_focus.title"),
      description: t("approach.business_focus.description"),
      header: (
        <div className="flex flex-1 w-full h-full min-h-[8rem] rounded-xl bg-gradient-to-br from-blue-500/10 to-transparent items-center justify-center border border-blue-500/10 group-hover/bento:border-blue-500/30 transition-colors">
          <FaBullseye className="h-10 w-10 text-blue-500/50 group-hover/bento:text-blue-500/70 transition-colors" />
        </div>
      ),
      className: "md:col-span-1",
      icon: <FaBullseye className="h-5 w-5 text-muted-foreground group-hover/bento:text-blue-500 transition-colors" />,
    },
    {
      title: t("links.github"),
      description: (
        <Link
          href={SOCIAL_LINKS.GITHUB}
          target="_blank"
          className="text-primary hover:underline inline-flex items-center gap-1"
        >
          Check my code
          <FaArrowDown className="h-3 w-3 -rotate-90" />
        </Link>
      ),
      header: (
        <div className="flex flex-1 w-full h-full min-h-[8rem] rounded-xl bg-gradient-to-br from-foreground/5 to-transparent items-center justify-center border border-foreground/5 group-hover/bento:border-foreground/20 transition-colors">
          <FaGithub className="h-12 w-12 text-foreground/40 group-hover/bento:text-foreground/80 transition-colors" />
        </div>
      ),
      className: "md:col-span-1",
      icon: <FaGithub className="h-5 w-5 text-muted-foreground group-hover/bento:text-foreground transition-colors" />,
    },
  ];

  return (
    <section className="py-24 px-6 relative" id="about">
       {/* Background Decoration */}
       <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <Motion
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto mb-16 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">{t("title")}</h2>
        <div className="h-1 w-20 bg-primary/50 mx-auto rounded-full" />
      </Motion>
      <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[22rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={item.className}
            icon={item.icon}
            delay={i * 0.1}
          />
        ))}
      </BentoGrid>
    </section>
  );
}
