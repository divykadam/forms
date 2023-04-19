import { useNavigate } from "react-router-dom";

const SubmitButton = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <button
        type="submit"
        className="tableContaint_btn"
        id="submitBTN"
        onClick={() => props.hendleSubmitform(navigate("/showAllC"))}
      >
        Submit
      </button>
    </>
  );
};
export default SubmitButton;
