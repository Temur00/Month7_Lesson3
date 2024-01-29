// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import React from "react";
// import Dashboard from "./components/Dashboard";
// import Teachers from "./pages/Teachers/Teachers";
// import Students from "./pages/Students/Students";

// const App = () => {
//   return (
//     <div>
//       <Dashboard />
//       <Teachers />
//       <Students />
//     </div>
//   );
// };

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import Teachers from "./pages/Teachers/Teachers";
import Students from "./pages/Students/Students";
import Main from "./pages/home/Main";
import Login from "./pages/login/Login";
import NotFound from "./pages/notFound/NotFound";
import Profile from "./pages/profile/Profile";

const App = () => {
  const [user, setUser] = useState("");

  return (
    <div>
      <Router>
        {/* {user ? <Header user={user} /> : null}{" "} */}
        <div className="all-ofthem">
          {user ? <Dashboard user={user} /> : null}{" "}
          <Routes className="all-ofThem">
            <Route path="/" element={<Main user={user} />} />
            <Route
              path="/profile"
              element={<Profile user={user} setUser={setUser} />}
            />
            <Route path="/students" element={<Students user={user} />} />
            <Route path="/teachers" element={<Teachers user={user} />} />
            <Route
              path="/login"
              element={<Login user={user} setUser={setUser} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
