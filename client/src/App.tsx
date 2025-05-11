import { BrowserRouter, Routes, Route } from "react-router-dom"
import { LoginPage } from "./pages/LoginPage"
import { SignupPage } from "./pages/SignupPage"
import { SelectTeamPage } from "./pages/Select-Team"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/SelectTeamPage" element={<SelectTeamPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
