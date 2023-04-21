import { Component } from "react";
import withNavigation from "./NavigationButton/Navigate";

class EmpShowData extends Component {
  constructor() {
    super();
    this.state = {
      employee: [],
      id: null,
      name: "",
      email: "",
      mobNo: "",
      address: "",
      editData: [],
      empId: "",
    };
  }

  //get data
  async componentDidMount() {
    const response = await fetch("http://localhost:3000/users");
    const json = await response.json();
    if (json) {
      this.setState({ employee: json });
    } else {
      console.log("Error:-Data coud not be fetched");
    }
  }

  //Delete Data
  handleDelete = async (id) => {
    const response = await fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE",
    });
    const deleteData = await response.json();
    if (deleteData) {
      alert(`"Delete" ${response}`);
    } else {
      console.log("Error:-Data coud not be fetched");
    }
  };

  //Edit data
  // handleEdit = (id, navigate) => {
  //   this.setState((prevState) => ({
  //     editData: prevState.employee.filter((data) => {
  //       return id === data.id;
  //     }),
  //   }));
  //   console.log("id", );
  //   navigate("/editC");
  // };

  handleEdit = (id, navigate) => {
    this.setState({ empId: id });
    console.log("empId", this.state.empId);
    navigate(`/editC/${id}`);
  };

  render() {
    const { navigate } = this.props;
    const { employee } = this.state;
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
          {employee.map((data, i) => (
            <tr key={i} className="table-containt_tr">
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.mobNo}</td>
              <td>{data.address}</td>
              <td>
                <button
                  className="table-containt_btn"
                  onClick={() => this.handleEdit(data.id, navigate)}
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  className="table-containt_btn"
                  onClick={() => this.handleDelete(data.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </table>
        <div className="emp-componethide"></div>
      </div>
    );
  }
}
export default withNavigation(EmpShowData);
