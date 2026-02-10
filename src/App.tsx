import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { supabase } from "@/lib/supabaseClient";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutPage from "./pages/AboutPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import Contact from "./pages/Contact";
import Registration from "./pages/Registration";
import ScrollToTop from "./components/ScrollToTop";

// Trek Pages
import EverestBaseCamp from "./pages/treks/EverestBaseCamp";
import AnnapurnaCircuit from "./pages/treks/AnnapurnaCircuit";
import LangtangValley from "./pages/treks/LangtangValley";
import ManasluCircuit from "./pages/treks/ManasluCircuit";
import UpperMustang from "./pages/treks/UpperMustang";
import GokyoLakes from "./pages/treks/GokyoLakes";
import EverestThreePasses from "./pages/treks/EverestThreePasses";
import EverestView from "./pages/treks/EverestView";
import JiriToEverest from "./pages/treks/JiriToEverest";
import PikeyPeak from "./pages/treks/PikeyPeak";
import AnnapurnaBaseCamp from "./pages/treks/AnnapurnaBaseCamp";
import GhorepaniPoonHill from "./pages/treks/GhorepaniPoonHill";
import MardiHimal from "./pages/treks/MardiHimal";
import JomsomMuktinath from "./pages/treks/JomsomMuktinath";
import TilichoLake from "./pages/treks/TilichoLake";
import SiklesVillage from "./pages/treks/SiklesVillage";
import GosainkundaHelambu from "./pages/treks/GosainkundaHelambu";
import LangtangGanjaLaPass from "./pages/treks/LangtangGanjaLaPass";
import TamangHeritageTrail from "./pages/treks/TamangHeritageTrail";
import TsumValley from "./pages/treks/TsumValley";
import ManasluBaseCamp from "./pages/treks/ManasluBaseCamp";
import DamodarKunda from "./pages/treks/DamodarKunda";
import KanchenjungaNorthBaseCamp from "./pages/treks/KanchenjungaNorthBaseCamp";
import KanchenjungaSouthBaseCamp from "./pages/treks/KanchenjungaSouthBaseCamp";
import KanchenjungaCircuit from "./pages/treks/KanchenjungaCircuit";
import MakaluBaseCamp from "./pages/treks/MakaluBaseCamp";
import SherpaniCol from "./pages/treks/SherpaniCol";
import UpperDolpa from "./pages/treks/UpperDolpa";
import LowerDolpa from "./pages/treks/LowerDolpa";
import PhoksundoLake from "./pages/treks/PhoksundoLake";
import SheyGompa from "./pages/treks/SheyGompa";
import RaraLake from "./pages/treks/RaraLake";
import JumlaToRaraLake from "./pages/treks/JumlaToRaraLake";

// Destination Pages
import Kathmandu from "./pages/destinations/Kathmandu";
import Pokhara from "./pages/destinations/Pokhara";
import Chitwan from "./pages/destinations/Chitwan";
import Lumbini from "./pages/destinations/Lumbini";

// Admin
import Registrations from "./pages/admin/Registrations";
import AdminReviewsPage from "./pages/admin/Reviews";
import AdminUsersPage from "./pages/admin/Users";
import AdminLoginPage from "./pages/admin/Login";

// Policy Pages
import Terms from "./pages/policies/Terms";
import Privacy from "./pages/policies/Privacy";
import Booking from "./pages/policies/Booking";
import Cancellation from "./pages/policies/Cancellation";

const queryClient = new QueryClient();

const RequireAdminInner = ({ children }: { children: React.ReactElement }) => {
  const [checked, setChecked] = React.useState(false);
  const [authed, setAuthed] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    let mounted = true;
    supabase.auth.getSession().then(({ data }) => {
      if (!mounted) return;
      setAuthed(!!data.session);
      setChecked(true);
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!mounted) return;
      setAuthed(!!session);
      setChecked(true);
    });
    return () => { mounted = false; sub.subscription.unsubscribe(); };
  }, []);

  if (!checked) return null; // or a spinner
  if (!authed) return <Navigate to="/admin/login" state={{ from: location.pathname }} replace />;
  return children;
};

const RequireAdmin = ({ children }: { children: React.ReactElement }) => {
  // simple guard: check supabase session and render children; otherwise redirect
  // implemented inline to avoid adding a new file
  return children;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Trek Routes */}
          <Route path="/treks/everest-base-camp" element={<EverestBaseCamp />} />
          <Route path="/treks/annapurna-circuit" element={<AnnapurnaCircuit />} />
          <Route path="/treks/langtang-valley" element={<LangtangValley />} />
          <Route path="/treks/manaslu-circuit" element={<ManasluCircuit />} />
          <Route path="/treks/upper-mustang" element={<UpperMustang />} />
          <Route path="/treks/gokyo-lakes" element={<GokyoLakes />} />
          <Route path="/treks/everest-three-passes" element={<EverestThreePasses />} />
          <Route path="/treks/everest-view" element={<EverestView />} />
          <Route path="/treks/jiri-to-everest" element={<JiriToEverest />} />
          <Route path="/treks/pikey-peak" element={<PikeyPeak />} />
          <Route path="/treks/annapurna-base-camp" element={<AnnapurnaBaseCamp />} />
          <Route path="/treks/ghorepani-poon-hill" element={<GhorepaniPoonHill />} />
          <Route path="/treks/mardi-himal" element={<MardiHimal />} />
          <Route path="/treks/jomsom-muktinath" element={<JomsomMuktinath />} />
          <Route path="/treks/tilicho-lake" element={<TilichoLake />} />
          <Route path="/treks/sikles-village" element={<SiklesVillage />} />
          <Route path="/treks/gosainkunda-helambu" element={<GosainkundaHelambu />} />
          <Route path="/treks/langtang-ganja-la-pass" element={<LangtangGanjaLaPass />} />
          <Route path="/treks/tamang-heritage-trail" element={<TamangHeritageTrail />} />
          <Route path="/treks/tsum-valley" element={<TsumValley />} />
          <Route path="/treks/manaslu-base-camp" element={<ManasluBaseCamp />} />
          <Route path="/treks/damodar-kunda" element={<DamodarKunda />} />
          <Route path="/treks/kanchenjunga-north-base-camp" element={<KanchenjungaNorthBaseCamp />} />
          <Route path="/treks/kanchenjunga-south-base-camp" element={<KanchenjungaSouthBaseCamp />} />
          <Route path="/treks/kanchenjunga-circuit" element={<KanchenjungaCircuit />} />
          <Route path="/treks/makalu-base-camp" element={<MakaluBaseCamp />} />
          <Route path="/treks/sherpani-col" element={<SherpaniCol />} />
          <Route path="/treks/upper-dolpa" element={<UpperDolpa />} />
          <Route path="/treks/lower-dolpa" element={<LowerDolpa />} />
          <Route path="/treks/phoksundo-lake" element={<PhoksundoLake />} />
          <Route path="/treks/shey-gompa" element={<SheyGompa />} />
          <Route path="/treks/rara-lake" element={<RaraLake />} />
          <Route path="/treks/jumla-to-rara" element={<JumlaToRaraLake />} />
           
          {/* Destination Routes */}
          <Route path="/destinations/kathmandu" element={<Kathmandu />} />
          <Route path="/destinations/pokhara" element={<Pokhara />} />
          <Route path="/destinations/chitwan" element={<Chitwan />} />
          <Route path="/destinations/lumbini" element={<Lumbini />} />
          
          {/* Admin */}
          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route path="/admin/registrations" element={<RequireAdminInner><Registrations /></RequireAdminInner>} />
          <Route path="/admin/reviews" element={<RequireAdminInner><AdminReviewsPage /></RequireAdminInner>} />
          <Route path="/admin/users" element={<RequireAdminInner><AdminUsersPage /></RequireAdminInner>} />
          
          {/* Policy Routes */}
          <Route path="/policies/terms" element={<Terms />} />
          <Route path="/policies/privacy" element={<Privacy />} />
          <Route path="/policies/booking" element={<Booking />} />
          <Route path="/policies/cancellation" element={<Cancellation />} />
          
          {/* Other Routes */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/registration" element={<Registration />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
