import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Team from "./components/Team";
import Whyqu from "./components/Whyqu";
import Stats from "./components/Stats";
import Recuritproc from "./components/Recruitproc";
import Ourrecurit from "./components/Ourrecurit";
import Contact from "./components/Contact";
// import Signin from "./components/Signin";
// import Registers from "./components/Registers";
// import Logout from "./components/Logout";
// import Userhome from "./components/Userpage/Userhome";
// import Admin from "./components/layouts/Admin";
// import { AdminUsers } from "./components/admin-pages/Admin-Users";
// import AdminHome from "./components/admin-pages/Home-admin";
// import JobsAdd from "./components/admin-pages/JobsAdd";
// import UserApplications from "./components/Userpage/Applications";
// import UserProfile from "./components/Userpage/Profileusers";


function App() {
  return (
    <div>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/why-qu" element={<Whyqu />} />
          <Route path="/placement-stats" element={<Stats />} />
          <Route path="/recruitment" element={<Recuritproc />} />
          <Route path="/our-recruiters" element={<Ourrecurit />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/sign-in" element={<Signin />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Registers />} /> 
          <Route path="/user-home" element={<Userhome />} />
          <Route path="/user-applications" element={<UserApplications />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/admin" element={<Admin />}>
            <Route path="users" element={<AdminUsers />} />
            <Route path="home" element={<AdminHome />} />
            <Route path="addjobs" element={<JobsAdd />} />
          </Route>
          {/* Add more routes for other components */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
