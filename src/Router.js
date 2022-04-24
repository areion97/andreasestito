import CV from './CV'
import About from './About'
import Home from './Home'
import Nav from './Nav'
import { Route, Routes } from 'react-router-dom'

function Router() {

  return (
  <div>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/about" element={<About />} />
      </Routes>
  </div>
  );
}

export default Router;
