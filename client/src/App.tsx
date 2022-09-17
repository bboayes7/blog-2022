
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import Navbar from './components/Navbar'
import Admin from './components/pages/Admin/Admin'
import Blog from './components/pages/Blog/Blog'
import { Container } from 'react-bootstrap'
function App() {

  return (
      <Container>

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Router>
      </Container>
  );
}

export default App;

