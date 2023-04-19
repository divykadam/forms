import { Component } from "react";
import EditButton from "./navigationButton/EditButton";
import EmpEdit from "./EmpEdit";

class EmpShowData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employee: [],
      id: null,
      name: "",
      email: "",
      mobno: "",
      address: "",
      editData: " ",
      empId: "",
    };
  }
  //get data
  componentDidMount() {
    fetch("http://localhost:3000/users")
      .then((response) => response.json())
      .then((result) => {
        this.setState({ employee: result });
      })
      .catch((error) => {
        this.setState({ error: error });
      });
  }

  //Delete Data
  handleDelete = (id) => {
    fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE",
    }).then((response) => {
      alert(`"Delete" ${response}`);
    });
  };

  //Edit data
  handleEdit = (id) => {
    this.setState.editData = this.state.employee.filter((data) => {
      return id === data.id;
    });
    console.log(this.state.editData);
  };

  render() {
    const { employee } = this.state;
    return (
      <>
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
                <td>{data.mobno}</td>
                <td>{data.address}</td>
                <td>
                  <EditButton handleEdit={this.handleEdit(data.id)} />
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
          <div className="emp-componethide">
            <EmpEdit editData={this.state.editData} />
          </div>
        </div>
      </>
    );
  }
}

export default EmpShowData;
