import { useEffect, useState } from "react";
import "./App.css";
import Users from "./users/Users";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";
import UsersDetailsPage from "./pages/UsersDetailsPage";

// function App() {
//   const [data, setData] = useState(null);

//   const [toggle, setToggle] = useState(false);

//   const [value, setValue] = useState("");

//   const onClick = () => {
//     setToggle((prev) => !prev);
//   };

//   const onChange = (e) => {
//     setValue(e.target.value);
//   };
//   useEffect(() => {
//     const timout = setTimeout(() => {
//       setData("kkk");
//     }, 100);

//     return () => {
//       clearTimeout(timout);
//     };
//   }, []);
//   return (
//     <div className="App">
//       {toggle == true && <div data-testid={"toggle-elem"}>toggle</div>}
//       <h1>Hello world</h1>
//       <p>{data ? data : "loading..."}</p>
//       <input
//         value={value}
//         onChange={onChange}
//         type="text"
//         placeholder="input"
//       />
//       <button data-testid={"toggle-btn"} onClick={onClick}>
//         click me
//       </button>
//       <Users></Users>
//     </div>
//   );
// }

function App() {
  return (
    <div>
      <Link to={"/"} data-testid="main-link">
        Main Page
      </Link>
      <Link to={"/about"} data-testid="about-link">
        About Page
      </Link>
      <Link to={"/users"} data-testid="users-link">
        Users
      </Link>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UsersDetailsPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
