import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './components/global/Header'
import Footer from './components/global/Footer'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Features from './components/pages/Features'
import About from './components/pages/About'
import FAQ from './components/pages/FAQ'
import ModelTryItOutPage from './components/pages/ModelTryItOutPage'
import Blogs from './components/pages/Blogs'


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Header />
          <Home />
          <Footer />
        </div>
      )
    },
    {
      path: "/contact",
      element: (
        <div>
          <Header />
          <Contact />
          <Footer />
        </div>
      )
    },
    {
      path: "/features",
      element: (
        <div>
          <Header />
          <Features />
          <Footer />
        </div>
      )
    },
    {
      path: "/about",
      element: (
        <div>
          <Header />
          <About />
          <Footer />
        </div>
      )
    },
    ,
    {
      path: "/blogs",
      element: (
        <div>
          <Header />
          <Blogs />
          <Footer />
        </div>
      )
    },
    {
      path: "/faq",
      element: (
        <div>
          <Header />
          <FAQ />
          <Footer />
        </div>
      )
    },
    {
      path: "/modeltryitout",
      element: (
        <div>
          <Header />
          <ModelTryItOutPage />
          <Footer />
        </div>
      )
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
