import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import AddUsers from './users/AddUsers';
import EditUsers from './users/EditUsers';
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/addUsers" element={<AddUsers />} />
        <Route exact path="/editUsers/:id" element={<EditUsers />} />
      </Routes>
      
      </Router>
      
    </div>
  );
}

export default App;
