
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { ThemeProvider } from './components/theme-provider';
import Layout from './components/Layout';
import Home from './pages/Home';
import RSVP from './pages/RSVP';
import Timeline from './pages/Timeline';
import Location from './pages/Location';
import Gallery from './pages/Gallery';

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="wedding-theme">
      <Toaster position="top-right" />
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/rsvp" element={<RSVP />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/location" element={<Location />} />
            <Route path="/gallery" element={<Gallery />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;