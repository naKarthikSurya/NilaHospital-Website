import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import MobileBottomBar from "./MobileBottomBar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-[72px] pb-20 md:pb-0">{children}</main>
      <Footer />
      <MobileBottomBar />
    </div>
  );
}
