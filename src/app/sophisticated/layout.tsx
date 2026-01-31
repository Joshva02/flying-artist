import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shannon Hutchinson — The Flying Artist | Sophisticated",
  description:
    "Portfolio of Shannon Hutchinson, a Trinidadian visual artist and Boeing 787 pilot. A sophisticated monochrome presentation.",
};

export default function SophisticatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
