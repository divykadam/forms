import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { AddData } from "../../action/index";
import "../form.css";

const FunctionForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [allData, setAllData] = useState({
    id: null,
    name: "",
    email: "",
    mobNo: "",
    address: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAllData({ ...allData, [name]: value });
  };

  const hendleSubmitform = (e) => {
    e.preventDefault();
    dispatch(AddData(allData));
    navigate("/employees");
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
              type="tel"
              placeholder="mobNo."
              name="mobNo"
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
          <button type="submit" className="btn" onClick={hendleSubmitform}>
            Submit
          </button>
        </tr>
      </table>
    </div>
  );
};

export default FunctionForm;
