import withNavigation from "./navigationLink/navigate";
import { Component } from "react";

export class EmpEdit extends Component {
  constructor(props) {
    super(props);
    const { paramsId } = this.props;

    this.state = {
      id: paramsId.id,
      name: "",
      email: "",
      mobNo: "",
      address: "",
    };
  }

  //get data
  async componentDidMount() {
    const response = await fetch(
      `http://localhost:3000/users/${this.state.id}`
    );
    const json = await response.json();
    if (json) {
      this.setState((prevState) => ({
        ...prevState,
        ...json,
      }));
    } else {
      console.log("Error:-Data coud not be fetched");
    }
  }

  //input change Data
  handleInputChange = (e) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };

  hendleSubmitform = async (e) => {
    e.preventDefault();
    const newLists = {
      id: this.state.id,
      name: this.state.name,
      email: this.state.email,
      mobNo: this.state.mobNo,
      address: this.state.address,
    };

    const response = await fetch(
      `http://localhost:3000/users/${this.state.id}`,
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newLists),
      }
    );
    const json = response.json();
    if (json) {
      this.props.navigate("/employeesC");
    } else {
      console.log("Error:-Data coud not be Update");
    }
  };

  //Cancel edit data Button
  CancelEdit = () => {
    this.props.navigate("/employeesC");
  };

  render() {
    return (
      <div className="contain-form">
        <table>
          <tr>
            <label>
              Id
              <input
                type="text"
                placeholder="id"
                name="id"
                value={this.state.id}
                onChange={this.handleInputChange}
              />
            </label>
          </tr>
          <tr>
            <label>
              Full Name
              <input
                type="text"
                placeholder="Full Name"
                name="name"
                value={this.state.name}
                onChange={this.handleInputChange}
              />
            </label>
          </tr>
          <tr>
            <label>
              Email
              <input
                type="email"
                placeholder="@gmail.com"
                name="email"
                value={this.state.email}
                onChange={this.handleInputChange}
              />
            </label>
          </tr>
          <tr>
            <label>
              Mob no.
              <input
                type="tel"
                placeholder="Mobno."
                name="mobNo"
                value={this.state.mobNo}
                onChange={this.handleInputChange}
              />
            </label>
          </tr>
          <tr>
            <label>
              Address
              <input
                type="address"
                placeholder="Address"
                name="address"
                value={this.state.address}
                onChange={this.handleInputChange}
              />
            </label>
          </tr>
          <tr>
            <td>
              <button className="btn" onClick={(e) => this.hendleSubmitform(e)}>
                Submit
              </button>
            </td>
            <td>
              <button className="btn" onClick={this.CancelEdit}>
                Cancel
              </button>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default withNavigation(EmpEdit);
