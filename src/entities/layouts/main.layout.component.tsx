import React from "react";
import { Menu } from "../shared/menu";
import { MainHeader } from "../shared/header";
import { Divider } from "../shared/divider";
import ContentLayout from "./content.layout.component";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="bg-blue-800">
      <MainHeader />
      <Divider />
      <main className="w-full min-h-screen py-6 grid grid-cols-1 lg:grid-cols-layout pr-6 pl-6 lg:pl-0">
        <Menu />
        <ContentLayout>{children}</ContentLayout>
      </main>
    </div>
  );
};

export default MainLayout;
