import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Doctors from "./pages/Doctors";
import DoctorProfile from "./pages/DoctorProfile";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import WhyBestHospitalNamakkal from "./pages/WhyBestHospitalNamakkal";
import BestWomenHospitalNamakkal from "./pages/BestWomenHospitalNamakkal";
import GynaecologyNamakkal from "./pages/GynaecologyNamakkal";
import ObstetricsNamakkal from "./pages/ObstetricsNamakkal";
import MaternityHospitalNamakkal from "./pages/MaternityHospitalNamakkal";
import WomensHealthNamakkal from "./pages/WomensHealthNamakkal";
import GeneralMedicineNamakkal from "./pages/GeneralMedicineNamakkal";
import MaternityCareTiruchengode from "./pages/MaternityCareTiruchengode";
import PregnancyCareRasipuram from "./pages/PregnancyCareRasipuram";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/services" element={<Services />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/doctors/:doctorId" element={<DoctorProfile />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/why-we-are-best-hospital-in-namakkal"
            element={<WhyBestHospitalNamakkal />}
          />
          <Route
            path="/best-women-hospital-in-namakkal"
            element={<BestWomenHospitalNamakkal />}
          />
          <Route path="/gynaecology-namakkal" element={<GynaecologyNamakkal />} />
          <Route path="/obstetrics-namakkal" element={<ObstetricsNamakkal />} />
          <Route
            path="/maternity-hospital-namakkal"
            element={<MaternityHospitalNamakkal />}
          />
          <Route path="/womens-health-namakkal" element={<WomensHealthNamakkal />} />
          <Route
            path="/general-medicine-namakkal"
            element={<GeneralMedicineNamakkal />}
          />
          <Route
            path="/tiruchengode-maternity-care"
            element={<MaternityCareTiruchengode />}
          />
          <Route
            path="/rasipuram-pregnancy-care"
            element={<PregnancyCareRasipuram />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
