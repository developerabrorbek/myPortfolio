import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Works from "./pages/Works";
import Contact from "./pages/Contact";
import Error from "./pages/Error";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Skills />} path="/skills" />
        <Route element={<Works />} path="/works" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<Error />} path="*" />
      </Routes>
    </>
  );
};

export default App;
