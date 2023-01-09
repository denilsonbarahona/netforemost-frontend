import React from "react";
import { MainLayout } from "./entities/layouts";
// import AddNotePage from "./entities/pages/add-note.page.componet";
import ViewNotesPage from "./entities/pages/view.notes.page.component";

function App() {
  return (
    <MainLayout>
      <ViewNotesPage />
    </MainLayout>
  );
}

export default App;
