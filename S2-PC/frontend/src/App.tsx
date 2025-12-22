import { Route, Routes } from "react-router";
import { CreatePage } from "./pages/CreatePage";
import { Homepage } from "./pages/HomePage";
import { NoteDetailPage } from "./pages/NoteDetailPage";
import Navbar from "./components/Navbar";

function App() {
  const themes = [
    "Retro",
    "Cyberpunk",
    "Garden",
    "Aqua",
    "Autumn",
    "wireframe",
  ];

  return (
    <div data-theme={themes[5].toLowerCase()} className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  )
}

export default App;