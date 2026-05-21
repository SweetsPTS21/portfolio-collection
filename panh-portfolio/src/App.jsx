import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import About from './pages/About';
import Projects from './pages/Projects';
import Conclusion from './pages/Conclusion';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="conclusion" element={<Conclusion />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
