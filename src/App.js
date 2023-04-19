import { Route, Routes } from "react-router-dom";
import Layout from "./Routing/Layout";
import { FormClass } from "./Form/classComponent/FormClass";
import EmpData from "./Form/classComponent/EmpData";
import EmpEdit from "./Form/classComponent/EmpEdit";
import FunctionEditData from "./Form/functionComponent/FunctionEditData";
import FunctionForm from "./Form/functionComponent/FunctionForm";
import ShowFunction from "./Form/functionComponent/ShowFunction";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="formC" element={<FormClass />} />
          <Route path="showAllC" element={<EmpData />} />
          <Route path="editC" element={<EmpEdit />} />

          {/* Function From Routing */}
          <Route path="form" element={<FunctionForm />} />
          <Route path="showAll" element={<ShowFunction />} />
          <Route path="edit/:id" element={<FunctionEditData />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
