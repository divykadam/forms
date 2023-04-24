import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { edit_data } from "../../action/index";
import "../form.css";

const FunctionEditData = () => {
  const dispatch = useDispatch();
  const editId = useParams();
  const navigate = useNavigate();
  const empData = useSelector((state) => state.updateEmployee.empData);
  const [allData, setAllData] = useState({
    id: "",
    name: "",
    email: "",
    mobNo: "",
    address: "",
  });

  //access data in input box
  useEffect(() => {
    const [editData] = empData.filter((data) => data.id === editId.id);
    setAllData(editData);
  }, [setAllData, empData]);

  //input Data
  const handleInputChange = (e) => {
    e.preventDefault();
    setAllData({ ...allData, [e.target.name]: e.target.value });
  };

  //submit Button
  const hendleSubmitform = (e) => {
    e.preventDefault();
    dispatch(edit_data(allData));
    navigate("/employees");
  };

  //Cancel Button
  const cancelButton = () => {
    navigate("/employees");
  };

  return (
    <div className="contain-form">
      <form>
        <table>
          <tr>
            <label>
              Id :-
              <input
                type="text"
                placeholder="id"
                name="id"
                value={allData.id}
                onChange={handleInputChange}
              />
            </label>
          </tr>
          <tr>
            <label>
              Full Name :-
              <input
                type="text"
                placeholder="Full Name"
                name="name"
                value={allData.name}
                onChange={handleInputChange}
              />
            </label>
          </tr>
          <tr>
            <label>
              Email :-
              <input
                type="email"
                placeholder="@gmail.com"
                name="email"
                value={allData.email}
                onChange={handleInputChange}
              />
            </label>
          </tr>
          <tr>
            <label>
              Mob no :-
              <input
                type="text"
                placeholder="Mobno."
                name="mobNo."
                value={allData.mobNo}
                onChange={handleInputChange}
              />
            </label>
          </tr>
          <tr>
            <label>
              Address :-
              <input
                type="address"
                placeholder="Address"
                name="address"
                value={allData.address}
                onChange={handleInputChange}
              />
            </label>
          </tr>
          <tr>
            <td>
              <button className="btn" type="submit" onClick={hendleSubmitform}>
                Submit
              </button>
            </td>
            <td>
              <button className="btn" onClick={cancelButton}>
                Cancel
              </button>
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
};

export default FunctionEditData;
