"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

export function YandexMetrika() {
  const isFirst = useRef(true);
  const pathname = usePathname();
  const prevPathname = useRef(pathname);

  const searchParams = useSearchParams();
  const prevSearchParams = useRef(searchParams);

  useEffect(() => {
    let url = window.origin + pathname;
    if (searchParams?.toString()) {
      url = url + `?${searchParams.toString()}`;
    }

    if (isFirst.current) {
      isFirst.current = false;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      window.ym && window.ym(100291191, "hit", url);
    } else if (
      searchParams?.toString() !== prevSearchParams.current?.toString() ||
      pathname !== prevPathname.current
    ) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      window.ym && window.ym(100291191, "hit", url);
    }

    prevPathname.current = pathname;
    prevSearchParams.current = searchParams;
  }, [pathname, searchParams]);

  return null;
}
