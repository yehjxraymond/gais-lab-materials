import { MainNavigation } from "@/components/MainNavigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="container p-12">
      <MainNavigation />
      {children}
    </main>
  );
}
