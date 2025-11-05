"use server";

import { cookies, headers } from "next/headers";
import { Locale, defaultLocale, locales } from "./config";

const COOKIE_NAME = "NEXT_LOCALE";

/**
 * Парсит заголовок Accept-Language и возвращает первую поддерживаемую локаль
 */
function parseAcceptLanguage(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) {
    return defaultLocale;
  }

  // Парсим языки из заголовка (например: "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7")
  const languages = acceptLanguage
    .split(",")
    .map((lang) => {
      const trimmed = lang.trim();
      const [localePart, qValue] = trimmed.split(";");

      // Извлекаем базовый язык (ru, en) из форматов типа "ru-RU", "ru", "en-US", "en"
      const locale = localePart.toLowerCase().trim().split("-")[0];
      const quality = qValue
        ? parseFloat(qValue.trim().replace(/q\s*=\s*/i, ""))
        : 1.0;

      return {
        locale,
        quality: isNaN(quality) ? 1.0 : quality,
      };
    })
    .filter((lang) => lang.locale.length === 2) // Фильтруем только валидные двухбуквенные коды
    .sort((a, b) => b.quality - a.quality); // Сортируем по качеству

  // Ищем первую поддерживаемую локаль
  for (const { locale } of languages) {
    if (locales.includes(locale as Locale)) {
      return locale as Locale;
    }
  }

  return defaultLocale;
}

export async function getUserLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get(COOKIE_NAME)?.value;

  // Если есть сохраненная локаль в cookie, используем её
  if (cookieLocale && locales.includes(cookieLocale as Locale)) {
    return cookieLocale as Locale;
  }

  // Определяем локаль по браузеру
  try {
    const headersList = await headers();
    const acceptLanguage = headersList.get("accept-language");

    if (acceptLanguage) {
      const detectedLocale = parseAcceptLanguage(acceptLanguage);
      return detectedLocale;
    }
  } catch (error) {
    // Если не удалось получить заголовки, используем defaultLocale
    console.warn("Failed to get Accept-Language header:", error);
  }

  return defaultLocale;
}

export async function setUserLocale(locale: Locale) {
  (await cookies()).set(COOKIE_NAME, locale);
}
