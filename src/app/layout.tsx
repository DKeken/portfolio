import { Montserrat } from "next/font/google";
import { getLocale, getTranslations } from "next-intl/server";
import { ThemeProvider } from "@/components/providers/with-theme";
import { I18nProvider } from "@/components/providers/with-i18n";
import { ScrollArea } from "@/components/ui/scroll-area";

import "./globals.css";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";
import { LocaleSwitcher } from "@/components/ui/locale-switcher";
import { YandexMetrika } from "@/components/_yandex-metrika";
import { Suspense } from "react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
  preload: true,
  fallback: ["sans-serif"],
});

export async function generateMetadata() {
  const locale = await getLocale();
  const t = await getTranslations({ locale });

  return {
    title: t("title"),
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
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: ` (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

              ym(100291191, "init", {
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    webvisor:true
              });`,
          }}
        />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<div><img src="https://mc.yandex.ru/watch/100291191" style="position:absolute; left:-9999px;" alt="" /></div>`,
          }}
        />
      </head>
      <body className={`${montserrat.variable} h-full w-full overflow-x-auto`}>
        <I18nProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            disableTransitionOnChange
            enableSystem
          >
            <div className="fixed top-4 right-4 z-50 flex gap-1 items-center justify-center">
              <LocaleSwitcher />
              <ThemeSwitcher />
            </div>
            <Suspense>
              <YandexMetrika />
            </Suspense>
            <ScrollArea className="h-full w-full relative">
              {children}
            </ScrollArea>
          </ThemeProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
