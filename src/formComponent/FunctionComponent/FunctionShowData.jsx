import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../show.css";
import { remove_data } from "../../action/index";

const ShowFunction = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const empData = useSelector((state) => state.updateEmployee.empData);

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  return (
    <div className="table-containt">
      <table className="table-containt_table">
        <tr className="table-containt_tr">
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone No.</th>
          <th>Address</th>
          <th></th>
          <th></th>
        </tr>
        {empData.map((data, i) => (
          <tr key={i} className="table-containt_tr">
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>{data.mobNo}</td>
            <td>{data.address}</td>
            <td>
              <button
                className="table-containt_btn"
                onClick={() => {
                  handleEdit(data.id);
                }}
              >
                update
              </button>
            </td>
            <td>
              <button
                className="table-containt_btn"
                onClick={() => dispatch(remove_data(data.id))}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default ShowFunction;
