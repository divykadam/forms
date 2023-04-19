import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../Show.css";

const ShowFunction = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const empData = useSelector((state) => state.reducer.empData);
  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };
  return (
    <div className="tableContaint">
      <table className="tableContaint_table">
        <tr className="tableContaint_tr">
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone No.</th>
          <th>Address</th>
          <th></th>
          <th></th>
        </tr>
        {empData.map((data, i) => (
          <tr key={i} className="tableContaint_tr">
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>{data.mobno}</td>
            <td>{data.address}</td>
            <td>
              <button
                className="tableContaint_btn"
                onClick={() => {
                  handleEdit(data.id);
                }}
              >
                update
              </button>
            </td>
            <td>
              <button
                className="tableContaint_btn"
                onClick={() =>
                  dispatch({ type: "removeData", payload: data.id })
                }
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
