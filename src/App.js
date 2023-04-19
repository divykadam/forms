// import { Route, Routes } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Routing/Layout";
import { FormClass } from "./Form/classComponent/FormClass";
import EmpData from "./Form/classComponent/EmpData";
import EmpEdit from "./Form/classComponent/EmpEdit";
import FunctionEditData from "./Form/functionComponent/FunctionEditData";
import FunctionForm from "./Form/functionComponent/FunctionForm";
import ShowFunction from "./Form/functionComponent/ShowFunction";

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
    ],
  },
]);

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="formC" element={<FormClass />} />
          <Route path="showAllC" element={<EmpData />} />
          <Route path="editC" element={<EmpEdit />} /> */}

      {/* Function From Routing */}
      {/* <Route path="form" element={<FunctionForm />} />
          <Route path="showAll" element={<ShowFunction />} />
          <Route path="edit/:id" element={<FunctionEditData />} />
        </Route>
      </Routes> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
