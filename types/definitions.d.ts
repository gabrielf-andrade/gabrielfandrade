import { getDictionary } from "@/app/[lang]/dictionaries";

export type Language = "en" | "pt";

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;
