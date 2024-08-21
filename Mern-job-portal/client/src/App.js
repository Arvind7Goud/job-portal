import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import '../src/styles/App.css';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import "react-toastify/dist/ReactToastify.css";
import {ToastContainer} from "react-toastify";
import PrivateRoute from "./components/routes/PrivateRoute";
import PublicRoute from "./components/routes/PublicRoute";
import Home from './pages/Home';
import PostJob from './pages/PostJob';

function App() {
  return (
    <>
        {" "}
        <ToastContainer />
      <Routes>
        <Route path="/" element = {<PublicRoute>
          <HomePage/>
        </PublicRoute>} />
        <Route path="/postjob" element={<PrivateRoute>
          <PostJob />
        </PrivateRoute>} />
          <Route path="/Home" element={<PrivateRoute>
            <Home />
        </PrivateRoute>} />
        <Route path="/login" element = { 
          <PublicRoute><Login/></PublicRoute>} />
        <Route path="/register" element = {
          <PublicRoute><Register/></PublicRoute> } />
        <Route path="/dashboard" element = {
          <PrivateRoute ><Dashboard/></PrivateRoute>} />
        <Route path="*" element = { <NotFound/>} />
      </Routes>
    </>
  );
}

export default App;