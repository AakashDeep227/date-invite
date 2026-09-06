import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Question from './pages/Question'
import Preferences from './pages/Preferences'
import Message from './pages/Message'
import Final from './pages/Final'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/question" element={<Question />} />
      <Route path="/preferences" element={<Preferences />} />
      <Route path="/message" element={<Message />} />
      <Route path="/final" element={<Final />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
