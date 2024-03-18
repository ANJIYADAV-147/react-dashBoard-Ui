import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.js'
import DashBoardpage from './components/DashBoardpage/index.js';
import SignIn from './components/SignIn/index.js'

const App=()=>(
  <Router>
    <Routes>
      <Route exact path="/" element={<SignIn />} />
      <Route exact path="/dashboard" element={<DashBoardpage />} />
    </Routes>
  </Router>

 
)

export default App;
