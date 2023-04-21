import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "../Form.css";
import { AddData } from "../../Action/Action";

const FunctionForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [allData, setAllData] = useState({
    id: null,
    name: "",
    email: "",
    mobno: "",
    address: "",
  });

  const hendleSubmitform = (e) => {
    e.preventDefault();
    dispatch(AddData(allData));
    navigate("/showAll");
  };
  return (
    <div className="contain-form">
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
              onChange={(e) => setAllData({ ...allData, name: e.target.value })}
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
          <button type="submit" className="btn" onClick={hendleSubmitform}>
            Submit
          </button>
        </tr>
      </table>
    </div>
  );
};
export default FunctionForm;
