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
        <Route exact path="/andreasestito" element={<Home />} />
        <Route exact path="/andreasestito/cv" element={<CV />} />
        <Route exact path="/andreasestito/about" element={<About />} />
      </Routes>
  </div>
  );
}

export default Router;
