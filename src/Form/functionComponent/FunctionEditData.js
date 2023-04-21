import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { EditData } from "../../Action/Action";
import "../Form.css";

//C:\Users\divya\TechStuff Work\Project\forms\src\Action\Action.js
const FunctionEditData = () => {
  const dispatch = useDispatch();
  const editId = useParams();
  const navigate = useNavigate();
  const empData = useSelector((state) => state.reducer.empData);
  const [allData, setAllData] = useState({
    id: "",
    name: "",
    email: "",
    mobno: "",
    address: "",
  });
  useEffect(() => {
    const [editData] = empData.filter((data) => editId.id === data.id);
    setAllData({ ...allData, ...editData });
  }, [setAllData]);

  const hendleSubmitform = (e) => {
    e.preventDefault();

    // dispatch({ type: "editData", payload: allData });
    dispatch(EditData(allData));
    navigate("/showAll");
  };
  //Cancel Button
  const cancelButton = () => {
    navigate("/showAll");
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
                value={allData.id}
                onChange={(e) => setAllData({ ...allData, id: e.target.value })}
              />
            </label>
          </tr>
          <tr>
            <label>
              Full Name :-
              <input
                type="text"
                placeholder="Full Name"
                value={allData.name}
                onChange={(e) =>
                  setAllData({ ...allData, name: e.target.value })
                }
              />
            </label>
          </tr>
          <tr>
            <label>
              Email :-
              <input
                type="email"
                placeholder="@gmail.com"
                value={allData.email}
                onChange={(e) =>
                  setAllData({ ...allData, email: e.target.value })
                }
              />
            </label>
          </tr>
          <tr>
            <label>
              Mob no :-
              <input
                type="text"
                placeholder="Mobno."
                value={allData.mobno}
                onChange={(e) =>
                  setAllData({ ...allData, mobno: e.target.value })
                }
              />
            </label>
          </tr>
          <tr>
            <label>
              Address :-
              <input
                type="address"
                placeholder="Address"
                value={allData.address}
                onChange={(e) =>
                  setAllData({ ...allData, address: e.target.value })
                }
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
