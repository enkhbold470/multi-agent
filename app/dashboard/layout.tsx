import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Rest&Vest",
  description:
    "Access your investor dashboard and find startup matches based on your criteria.",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
