import { redirect } from "next/navigation";

export const runtime = "edge";

export default function CatchAllPage() {
  redirect("/");
}

export async function generateMetadata() {
  return {
    title: "404 | Page not found",
    description: "404 | Page not found",
  };
}
