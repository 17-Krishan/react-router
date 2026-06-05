import './App.css'
import Header from './components/Header'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Layout from './Layout.jsx'
import Contact from './pages/Contact.jsx'
import User from './pages/User.jsx'
import Github, { githubInfoLoader } from './pages/Github.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "user/:id",
        element: <User />
      },
      {
        path: "github",
        element: <Github />,
        loader: githubInfoLoader
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App
