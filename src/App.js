import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Routing/Layout";
import { FormClass } from "./Form/classComponent/FormClass";
import EmpData from "./Form/classComponent/EmpData";
import EmpEdit from "./Form/classComponent/EmpEdit";
import FunctionEditData from "./Form/functionComponent/FunctionEditData";
import FunctionForm from "./Form/functionComponent/FunctionForm";
import ShowFunction from "./Form/functionComponent/ShowFunction";
import Error from "./Form/Error";

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
        path: "showAllC",
        element: <EmpData />,
      },
      {
        path: "editC",
        element: <EmpEdit />,
      },

      // Function From Routing
      {
        path: "form",
        element: <FunctionForm />,
      },
      {
        path: "showAll",
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

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
