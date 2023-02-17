import React from "react";
import ReactDOM from "react-dom/client";
import "./App.scss";
import Form from "./Components/Form/Form";
import Step1 from "./Components/Step1/Step1";
import Step2 from "./Components/Step2/Step2";
import Step3 from "./Components/Step3/Step3";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppProvider } from "./Context";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Form />,
  },
  {
    path: "/step1",
    element: <Step1 />,
  },
  {
    path: "/step2",
    element: <Step2 />,
  },
  {
    path: "/step3",
    element: <Step3 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <main>
        <RouterProvider router={router} />
      </main>
    </AppProvider>
  </React.StrictMode>
);
