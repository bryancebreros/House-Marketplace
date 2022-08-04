import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import PrivateRoute from './components/PrivateRoute';
import Explore from "./pages/Explore";
import Offers from "./pages/Offers"; 
import Category from './pages/Category'
import Profile from "./pages/Profile";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ForgotPass from "./pages/ForgotPass";
import Navbar from './components/Navbar';
import CreateListing from './pages/CreateListing';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Explore />} />
        <Route path='/offers' element={<Offers />} />
        <Route path='/category/:categoryName' element={<Category />} />
        {/* redirects to signIn if theres no user */}
        <Route path='/profile' element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />}/>
          </Route>
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/forgotpass' element={<ForgotPass />} />
        <Route path='/create-listing' element={<CreateListing />} />
      </Routes>
      <Navbar />
    </Router>
      {/* @TODO navbar */}
      <ToastContainer />
    </>
  );
}

export default App;
