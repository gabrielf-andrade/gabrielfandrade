import { getDictionary } from "@/lib/dictionaries";

export type Language = "en" | "pt";

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;
