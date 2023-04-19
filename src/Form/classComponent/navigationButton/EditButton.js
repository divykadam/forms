import { useNavigate } from "react-router-dom";

const EditButton = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <button
        className="tableContaint_btn"
        id="submitBTN"
        onClick={() => props.handleEdit(navigate("/editC"))}
      >
        Edit
      </button>
    </>
  );
};
export default EditButton;
