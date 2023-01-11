import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "../entities/layouts";
import EditNotePage from "../entities/pages/edit.note.page.component";
import AddNotePage from "../entities/pages/add-note.page.componet";
import ViewNotesPage from "../entities/pages/view.notes.page.component";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<ViewNotesPage />} />
          <Route path="/new" element={<AddNotePage />} />
          <Route path="/edit/:id" element={<EditNotePage />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default AppRoutes;
