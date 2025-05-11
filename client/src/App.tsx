import { BrowserRouter, Routes, Route } from "react-router-dom"
import { LoginPage } from "./pages/LoginPage"
import { SignupPage } from "./pages/SignupPage"
import { SelectTeamPage } from "./pages/SelectTeam"
import { SchedulePage } from "./pages/SchedulePage"
import { GamePage } from "./pages/GamePage"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/select-team" element={<SelectTeamPage />} />
        <Route path="/team/:myTeam/schedule" element={<SchedulePage />} />
        <Route path="/game" element={<GamePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
