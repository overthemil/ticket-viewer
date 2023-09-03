import { Toaster } from "@/components/ui/toaster"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Dashboard from "@/routes/Dashboard"
import Queues from "@/routes/Queues";
import Wiki from "./routes/Wiki";
import Calendar from "./routes/Calendar";
import MainLayout from "./layouts/MainLayout";
import Ticket from "./routes/Ticket";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/queues",
        element: <Queues />
      },
      {
        path: "/calendar",
        element: <Calendar />
      },
      {
        path: "/wiki",
        element: <Wiki />
      },
      {
        path: "/ticket/*",
        element: <Ticket />
      }
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  )
}

export default App
