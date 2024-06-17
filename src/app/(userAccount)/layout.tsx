import React, { ReactNode, Suspense } from "react";
import Sidebar from "./_components/Sidebar/Sidebar";
import Container from "@/components/shared/Container";
import Header from "@/components/shared/Header/Header";
import Footer from "@/components/shared/Footer/Footer";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <Container className="">
        <div className="flex justify-between ">
          <Sidebar />
          {children}
        </div>
      </Container>
        <Footer />
    </>
  );
};

export default layout;
