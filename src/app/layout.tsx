import { Montserrat, JetBrains_Mono } from "next/font/google";
import { getLocale, getTranslations } from "next-intl/server";
import { ThemeProvider } from "@/components/providers/with-theme";
import { I18nProvider } from "@/components/providers/with-i18n";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";
import { LocaleSwitcher } from "@/components/ui/locale-switcher";

import { SITE_CONFIG } from "@/constants/links";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
  preload: true,
  fallback: ["sans-serif"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export async function generateMetadata() {
  const locale = await getLocale();
  const t = await getTranslations({ locale });

  const baseUrl = SITE_CONFIG.BASE_URL;
  const screenshotUrl = `${baseUrl}${SITE_CONFIG.SCREENSHOT_PATH}`;

  return {
    title: t("title"),
    description: t("hero.developer_description"),
    openGraph: {
      title: t("title"),
      description: t("hero.developer_description"),
      images: [
        {
          url: screenshotUrl,
          width: 1920,
          height: 1080,
          alt: t("title"),
        },
      ],
      type: "website",
      locale: locale,
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("hero.developer_description"),
      images: [screenshotUrl],
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className="h-screen w-screen scroll-smooth antialiased"
    >
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0, viewport-fit=cover"
        />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${montserrat.variable} ${jetbrainsMono.variable} h-full w-full font-sans`}
      >
        <I18nProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="fixed top-6 right-6 z-50 flex gap-2 items-center justify-center p-1.5 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 shadow-sm">
              <LocaleSwitcher />
              <ThemeSwitcher />
            </div>

            <ScrollArea className="h-full w-full relative">
              {children}
            </ScrollArea>
          </ThemeProvider>
        </I18nProvider>
        <Analytics />
      </body>
    </html>
  );
}
