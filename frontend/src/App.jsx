
import  Login  from "./pages/Login"
import MainLayout from "./layout/MainLayout"
import Navbar from "./components/Navbar"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import HeroSection from "./pages/student/HeroSection";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children:[
      {
        path:"/",
        element:(
          <>
          <HeroSection/>
          </>
        )
      },
      {
        path: "login",
        element: (
            <Login />
          
        ),
      },
    ]
    

       
  }
]);

function App() {
  return (
    <main>
      <ThemeProvider>
      <RouterProvider router={appRouter} />
      </ThemeProvider>
    </main>
  );
}

export default App;

