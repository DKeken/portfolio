import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

export async function I18nProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
