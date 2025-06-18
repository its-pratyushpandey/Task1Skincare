import "./tailwind.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Desktop, TermsOfService, PrivacyPolicy, CookiesPolicy } from "./screens/Desktop/Desktop";
import { BrowserRouter, Routes, Route } from "react-router-dom";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Desktop />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cookies-policy" element={<CookiesPolicy />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
