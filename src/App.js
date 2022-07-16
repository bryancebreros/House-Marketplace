import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import PrivateRoute from './components/PrivateRoute';
import Explore from "./pages/Explore";
import Offers from "./pages/Offers"; 
import Profile from "./pages/Profile";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ForgotPass from "./pages/ForgotPass";
import Navbar from './components/Navbar';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Explore />} />
        <Route path='/offers' element={<Offers />} />
        {/* redirects to signIn if theres no user */}
        <Route path='/profile' element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />}/>
          </Route>
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/forgotpass' element={<ForgotPass />} />
      </Routes>
      <Navbar />
    </Router>
      {/* @TODO navbar */}
      <ToastContainer />
    </>
  );
}

export default App;
