import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Navbar from "./components/global/Navbar";
import UploadFile from "./components/pages/UploadFile";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Navbar/>
          <UploadFile/>
        </div>
      )
    }
  ]);

  return ( <RouterProvider router={router}/>)
}

export default App
