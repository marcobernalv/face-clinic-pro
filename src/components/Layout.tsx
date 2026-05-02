import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppFloat from "./WhatsAppFloat";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col bg-background">
    <Navbar />
    <main className="flex-1">{children}</main>
    <Footer />
    <WhatsAppFloat />
  </div>
);

export default Layout;
