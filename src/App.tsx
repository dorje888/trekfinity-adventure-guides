
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutPage from "./pages/AboutPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import Contact from "./pages/Contact";

// Trek Pages
import EverestBaseCamp from "./pages/treks/EverestBaseCamp";
import AnnapurnaCircuit from "./pages/treks/AnnapurnaCircuit";
import LangtangValley from "./pages/treks/LangtangValley";
import ManasluCircuit from "./pages/treks/ManasluCircuit";
import UpperMustang from "./pages/treks/UpperMustang";
import GokyoLakes from "./pages/treks/GokyoLakes";

// Destination Pages
import Kathmandu from "./pages/destinations/Kathmandu";
import Pokhara from "./pages/destinations/Pokhara";
import Chitwan from "./pages/destinations/Chitwan";
import Lumbini from "./pages/destinations/Lumbini";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Trek Routes */}
          <Route path="/treks/everest-base-camp" element={<EverestBaseCamp />} />
          <Route path="/treks/annapurna-circuit" element={<AnnapurnaCircuit />} />
          <Route path="/treks/langtang-valley" element={<LangtangValley />} />
          <Route path="/treks/manaslu-circuit" element={<ManasluCircuit />} />
          <Route path="/treks/upper-mustang" element={<UpperMustang />} />
          <Route path="/treks/gokyo-lakes" element={<GokyoLakes />} />
          
          {/* Destination Routes */}
          <Route path="/destinations/kathmandu" element={<Kathmandu />} />
          <Route path="/destinations/pokhara" element={<Pokhara />} />
          <Route path="/destinations/chitwan" element={<Chitwan />} />
          <Route path="/destinations/lumbini" element={<Lumbini />} />
          
          {/* Other Routes */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
