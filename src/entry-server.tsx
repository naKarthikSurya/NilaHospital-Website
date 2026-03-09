import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Doctors from "./pages/Doctors";
import DoctorProfile from "./pages/DoctorProfile";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export function render(url: string): string {
  const queryClient = new QueryClient();

  return renderToString(
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <StaticRouter location={url}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="/services" element={<Services />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/doctors/:doctorId" element={<DoctorProfile />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </StaticRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
