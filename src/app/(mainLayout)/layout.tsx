import Footer from "@/components/shared/Footer/Footer";
import Header from "@/components/shared/Header/Header";
import LandingPageProvider from "@/lib/LandingPageProvider";
import React, { ReactNode, Suspense } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <LandingPageProvider>
      <Header/>
      <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      <Footer/>
    </LandingPageProvider>
  );
};

export default layout;
