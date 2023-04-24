import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout";
// Class Component import
import FormClass from "../formComponent/classComponent/classForm";
import EmpShowData from "../formComponent/classComponent/classShowData";
import EmpEdit from "../formComponent/classComponent/classEditForm";

// Function Component import
import FunctionEditData from "../formComponent/functionComponent/functionEditData";
import FunctionForm from "../formComponent/functionComponent/functionForm";
import ShowFunction from "../formComponent/functionComponent/functionShowData";
import Error from "../formComponent/error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "formC",
        element: <FormClass />,
      },
      {
        path: "employeesC",
        element: <EmpShowData />,
      },
      {
        path: "editC/:id",
        element: <EmpEdit />,
      },

      // Function From Routing
      {
        path: "form",
        element: <FunctionForm />,
      },
      {
        path: "employees",
        element: <ShowFunction />,
      },
      {
        path: "edit/:id",
        element: <FunctionEditData />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

const Routing = () => {
  return <RouterProvider router={router} />;
};

export default Routing;
