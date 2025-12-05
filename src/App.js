import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";

import { initSmoothScroll } from "./smoothScroll";
import "./index.css";

import ScrollTop from "./components/ScrollToTop/ScrollTopButton";
import ScrollToTopOnRouteChange from "./components/ScrollToTop/ScrollToTopOnRouteChange";
import ScrollTopButton from "./components/ScrollToTop/ScrollTopButton";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ForceReload from "./components/ForceReload";

// Admin
import AdminLogin from "./pages/Admin/AdminLogin";
import CommentsAdmin from "./pages/Admin/CommentsAdmin";
import AdminDashboard from "./pages/Admin/AdminDashboard";

// Pages
import Home from "./pages/Home/Home";
import Celebrity from "./pages/Celebrity/Celebrity";
import Builder from "./pages/Builder/Builder";
import Connectivity from "./pages/Connectivity/Connectivity";
import Infrastructure from "./pages/Infrastructure/Infrastructure";
import Insurance from "./pages/Insurance/Insurance";
import Interiors from "./pages/Interiors/Interiors";
import LocalityInsight from "./pages/LocalityInsight/LocalityInsight";
import PropertyBuyingGuides from "./pages/PropertyBuyingGuides/PropertyBuyingGuides";
import PropertyNews from "./pages/PropertyNews/PropertyNews";
import Vastu from "./pages/Vastu/Vastu";
import Nri from "./pages/Nri/Nri";

// Inner Pages
import InnerBuilder1 from "./pages/Builder/InnerBuilder/InnerBuilder1";
import InnerBuilder2 from "./pages/Builder/InnerBuilder/InnerBuilder2";
import InnerBuilder3 from "./pages/Builder/InnerBuilder/InnerBuilder3";

import MukeshAmbani from "./pages/Celebrity/InnerCelebrity/MukeshAmbani";
import ViratKohli from "./pages/Celebrity/InnerCelebrity/ViratKohli";
import ShahrukhKhan from "./pages/Celebrity/InnerCelebrity/ShahrukhKhan";
import VijayVerma from "./pages/Celebrity/InnerCelebrity/VijayVerma";

import InnerConnectivity1 from "./pages/Connectivity/InnerConnectivity/InnerConnectivity1";
import InnerConnectivity2 from "./pages/Connectivity/InnerConnectivity/InnerConnectivity2";

import InnerInfrastructure from "./pages/Infrastructure/InnerInfrastructure/InnerInfrastructure";
import InnerInsurance from "./pages/Insurance/InnerInsurance/InnerInsurance";

import InnerInterior1 from "./pages/Interiors/InnerInterior/InnerInterior1";
import InnerInterior2 from "./pages/Interiors/InnerInterior/InnerInterior2";
import InnerInterior3 from "./pages/Interiors/InnerInterior/InnerInterior3";

import InnerLocalityInsight1 from "./pages/LocalityInsight/InnerLocalityInsight/InnerLocalityInsight1";
import InnerLocalityInsight2 from "./pages/LocalityInsight/InnerLocalityInsight/InnerLocalityInsight2";

import InnerPropertyBuyingGuides from "./pages/PropertyBuyingGuides/InnerPropertyBuyingGuides/InnerPropertyBuyingGuides";
import InnerPropertyNews1 from "./pages/PropertyNews/InnerPropertyNews/InnerPropertyNews1";
import InnerPropertyNews2 from "./pages/PropertyNews/InnerPropertyNews/InnerPropertyNews2";

import InnerVastu1 from "./pages/Vastu/InnerVastu/InnerVastu1";

// Calculators
import DutyCalculator from "./pages/DutyCalculator/DutyCalculator";
import AreaCalculator from "./pages/AreaCalculator/AreaCalculator";

import AcerToBigha from "./pages/AreaCalculator/InnerAreaCalculator/AcerToBigha";
import BighaToAcer from "./pages/AreaCalculator/InnerAreaCalculator/BighaToAcer";
import BillionToCrore from "./pages/AreaCalculator/InnerAreaCalculator/BillionToCrore";
import MillionToRupees from "./pages/AreaCalculator/InnerAreaCalculator/MillionToRupees";
import CentimetersToInches from "./pages/AreaCalculator/InnerAreaCalculator/CentimetersToInches";
import CentimeterToFeet from "./pages/AreaCalculator/InnerAreaCalculator/CentimeterToFeet";
import FeetToCm from "./pages/AreaCalculator/InnerAreaCalculator/FeetToCm";
import FeetToInches from "./pages/AreaCalculator/InnerAreaCalculator/FeetToInches";
import FeetToMeter from "./pages/AreaCalculator/InnerAreaCalculator/FeetToMeter";
import InchesToCm from "./pages/AreaCalculator/InnerAreaCalculator/InchesToCm";
import InchesToFeet from "./pages/AreaCalculator/InnerAreaCalculator/InchesToFeet";
import InchesToMillimeters from "./pages/AreaCalculator/InnerAreaCalculator/InchesToMillimeters";
import MillimetersToFeet from "./pages/AreaCalculator/InnerAreaCalculator/MillimetersToFeet";
import MillimetersToInches from "./pages/AreaCalculator/InnerAreaCalculator/MillimetersToInches";
import MeterToCentimeter from "./pages/AreaCalculator/InnerAreaCalculator/MeterToCentimeter";
import CentToSquare from "./pages/AreaCalculator/InnerAreaCalculator/CentToSquare";
import DecimalToSquare from "./pages/AreaCalculator/InnerAreaCalculator/DecimalToSquare";
import KilogramsToPound from "./pages/AreaCalculator/InnerAreaCalculator/KilogramsToPound";
import SquareFeetToGaj from "./pages/AreaCalculator/InnerAreaCalculator/SquareFeetToGaj";

// ======================== ADMIN PROTECTED ROUTE ===========================
const AdminProtected = ({ children }) => {
  const isLoggedIn = localStorage.getItem("adminLoggedIn");
  if (!isLoggedIn) return <Navigate to="/admin/login" replace />;
  return children;
};

// ======================== HIDE HEADER/FOOTER ON ADMIN ROUTES ==============
const LayoutWrapper = ({ children }) => {
  const location = useLocation();

  // Because basename="/test", actual app routes start with /admin
  const isAdminRoute =
    location.pathname.startsWith("/admin") ||
    location.pathname.startsWith("/admin/");

  if (isAdminRoute) {
    return <>{children}</>; // hide header/footer
  }

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

function App() {
  useEffect(() => {
    initSmoothScroll && initSmoothScroll();
  }, []);

  return (
    <BrowserRouter basename="/test">
      <ScrollToTopOnRouteChange />
      <ForceReload />
      <ScrollTopButton />

      <LayoutWrapper>
        <Routes>

          {/* admin redirect */}
          <Route path="/admin" element={<Navigate to="/admin/login" replace />} />

          {/* login */}
          <Route path="/admin/login" element={<AdminLogin />} />

          {/* admin protected */}
          <Route path="/admin/comments" element={<AdminProtected><CommentsAdmin /></AdminProtected>} />
          <Route path="/admin/dashboard" element={<AdminProtected><AdminDashboard /></AdminProtected>} />

          {/* HOME PAGE */}
          <Route path="/" element={<Home />} />

          {/* Builder */}
          <Route path="/builder" element={<Builder />} />
          <Route path="/inner-builder1" element={<InnerBuilder1 />} />
          <Route path="/inner-builder2" element={<InnerBuilder2 />} />
          <Route path="/inner-builder3" element={<InnerBuilder3 />} />

          {/* Celebrity */}
          <Route path="/celebrity-homes" element={<Celebrity />} />
          <Route path="/mukeshambani" element={<MukeshAmbani />} />
          <Route path="/viratkohli" element={<ViratKohli />} />
          <Route path="/shahrukh-khan" element={<ShahrukhKhan />} />
          <Route path="/vijayverma" element={<VijayVerma />} />

          {/* Connectivity */}
          <Route path="/connectivity" element={<Connectivity />} />
          <Route path="/innerconnectivity1" element={<InnerConnectivity1 />} />
          <Route path="/innerconnectivity2" element={<InnerConnectivity2 />} />

          {/* Infrastructure */}
          <Route path="/infrastructure" element={<Infrastructure />} />
          <Route path="/innerinfrastructure" element={<InnerInfrastructure />} />

          {/* Insurance */}
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/innerinsurance" element={<InnerInsurance />} />

          {/* Interiors */}
          <Route path="/interiors" element={<Interiors />} />
          <Route path="/innerinterior1" element={<InnerInterior1 />} />
          <Route path="/innerinterior2" element={<InnerInterior2 />} />
          <Route path="/innerinterior3" element={<InnerInterior3 />} />

          {/* Locality */}
          <Route path="/locality-insight" element={<LocalityInsight />} />
          <Route path="/innerlocalityinsight1" element={<InnerLocalityInsight1 />} />
          <Route path="/innerlocalityinsight2" element={<InnerLocalityInsight2 />} />

          {/* Buying Guides */}
          <Route path="/property-buying-guides" element={<PropertyBuyingGuides />} />
          <Route path="/innerpropertybuyingguides" element={<InnerPropertyBuyingGuides />} />

          {/* News */}
          <Route path="/property-news" element={<PropertyNews />} />
          <Route path="/innerpropertynews1" element={<InnerPropertyNews1 />} />
          <Route path="/innerpropertynews2" element={<InnerPropertyNews2 />} />

          {/* Vastu */}
          <Route path="/vastu" element={<Vastu />} />
          <Route path="/innervastu1" element={<InnerVastu1 />} />

          {/* NRI */}
          <Route path="/nri" element={<Nri />} />

          {/* Calculators */}
          <Route path="/dutycalculator" element={<DutyCalculator />} />
          <Route path="/areacalculator" element={<AreaCalculator />} />

          {/* Area Converters */}
          <Route path="/area/acre-to-bigha-converter" element={<AcerToBigha />} />
          <Route path="/area/bigha-to-acre-converter" element={<BighaToAcer />} />
          <Route path="/area/billion-to-crore-converter" element={<BillionToCrore />} />
          <Route path="/area/million-to-rupees-converter" element={<MillionToRupees />} />
          <Route path="/area/centimeters-to-inches-converter" element={<CentimetersToInches />} />
          <Route path="/area/centimeter-to-feet-converter" element={<CentimeterToFeet />} />
          <Route path="/area/feet-to-cm-converter" element={<FeetToCm />} />
          <Route path="/area/feet-to-inches-converter" element={<FeetToInches />} />
          <Route path="/area/feet-to-meter-converter" element={<FeetToMeter />} />
          <Route path="/area/inches-to-cm-converter" element={<InchesToCm />} />
          <Route path="/area/inches-to-feet-converter" element={<InchesToFeet />} />
          <Route path="/area/inches-to-millimeters-converter" element={<InchesToMillimeters />} />
          <Route path="/area/millimeters-to-feet-converter" element={<MillimetersToFeet />} />
          <Route path="/area/millimeters-to-inches-converter" element={<MillimetersToInches />} />
          <Route path="/area/meter-to-centimeter-converter" element={<MeterToCentimeter />} />
          <Route path="/area/cent-to-square-feet-converter" element={<CentToSquare />} />
          <Route path="/area/decimal-to-square-feet-converter" element={<DecimalToSquare />} />
          <Route path="/area/kilograms-to-pound-converter" element={<KilogramsToPound />} />
          <Route path="/area/square-feet-to-gaj-converter" element={<SquareFeetToGaj />} />

        </Routes>
      </LayoutWrapper>

      <ScrollTop />
    </BrowserRouter>
  );
}

export default App;
