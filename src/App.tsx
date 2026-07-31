import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AboutPage } from './pages/AboutPage'
import { HomePage } from './pages/HomePage'
import { MenuPage } from './pages/MenuPage'
import { PlaceholderPage } from './pages/PlaceholderPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route
          path="/catering"
          element={
            <PlaceholderPage
              title="Catering"
              description="Party packages and large orders — call (718) 314-6236 to plan your event."
            />
          }
        />
        <Route path="/contact" element={<Navigate to="/#visit" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
