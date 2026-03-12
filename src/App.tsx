import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import VisaDetailPage from "@/pages/VisaDetailPage";
import ServiceDetailPage from "@/pages/ServiceDetailPage";
import BlogDetailPage from "@/pages/BlogDetailPage";
import OfficeDetailPage from "@/pages/OfficeDetailPage";
import ContactPage from "@/pages/ContactPage";
import AboutPage from "@/pages/AboutPage";
import ServicesPage from "@/pages/ServicesPage";
import DestinationsPage from "@/pages/DestinationsPage";
import BlogPage from "@/pages/BlogPage";
import NotFound from "@/pages/NotFound";
import Layout from "@/components/Layout";
import ScrollToTop from "@/components/ScrollToTop";
import VisaEligibilityPage from "@/pages/VisaEligibilityPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/destinations" element={<DestinationsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/offices/:officeId" element={<OfficeDetailPage />} />
            <Route path="/visa/:countryId" element={<VisaDetailPage />} />
            <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
            <Route path="/blog/:blogId" element={<BlogDetailPage />} />
            <Route path="/visa-checker" element={<VisaEligibilityPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
