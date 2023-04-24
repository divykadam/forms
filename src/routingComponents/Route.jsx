import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
// Class Component import
import FormClass from "../formComponent/ClassComponent/ClassForm";
import EmpShowData from "../formComponent/ClassComponent/ClassShowData";
import EmpEdit from "../formComponent/ClassComponent/ClassEditForm";

// Function Component import
import FunctionForm from "../formComponent/FunctionComponent/FunctionForm";
import FunctionEditData from "../formComponent/FunctionComponent/FunctionEditData";
import ShowFunction from "../formComponent/FunctionComponent/FunctionShowData";
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
