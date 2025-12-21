import { Route, Routes } from "react-router";
import { CreatePage } from "./pages/CreatePage";
import { Homepage } from "./pages/HomePage";
import { NoteDetailPage } from "./pages/NoteDetailPage";

function App() {
  const themes = [
    "Light",
    "Retro",
    "Cyberpunk",
    "Valentine",
    "Garden",
    "Aqua",
    "Wireframe",
    "Autumn",
  ];

  return (
    <div data-theme={themes[7].toLowerCase()}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  )
}

export default App;