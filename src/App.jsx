import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import GitHub from "./pages/GitHub";
import Param from './pages/Param'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />,
          <Home />,
          <Footer />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <Navbar />,
          <About />,
          <Footer />
        </>
      ),
    },
    {
      path: "/contact",
      element: (
        <>
          <Navbar />,
          <Contact />,
          <Footer />
        </>
      ),
    },
    {
      path: "/github",
      element: (
        <>
          <Navbar />,
          <GitHub />,
          <Footer />
        </>
      ),
    },
    {
      path: "/param/:username",
      element: (
        <>
          <Navbar />,
          <Param />,
          <Footer />
        </>
      ),
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;