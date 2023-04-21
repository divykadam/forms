import withNavigation from "./NavigationButton/Navigate";
import { Component } from "react";

export class EmpEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      employee: this.props.employee,
      id: null,
      name: "",
      email: "",
      mobno: "",
      address: "",
    };
    console.log("empData", this.props.employee);
  }

  hendleSubmitform = (navigate) => {
    const newLists = {
      id: this.state.id,
      name: this.state.name,
      email: this.state.email,
      mobno: this.state.mobno,
      address: this.state.address,
    };
    console.warn(newLists);

    fetch(`http://localhost:3000/users/${this.state.id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newLists),
    })
      .then((result) => {
        alert("updating Data....");
        navigate("/showAllC");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //Cancel edit data Button
  CancelEdit = (navigate) => {
    navigate("/showAllC");
  };
  render() {
    const { navigate } = this.props;
    return (
      <div className="contain-form">
        <table>
          <tr>
            <label>
              Id
              <input
                type="text"
                placeholder="id"
                value={this.state.id}
                onChange={(e) => {
                  this.setState({ id: e.target.value });
                }}
              />
            </label>
          </tr>
          <tr>
            <label>
              Full Name
              <input
                type="text"
                placeholder="Full Name"
                value={this.state.name}
                onChange={(e) => {
                  this.setState({ name: e.target.value });
                }}
              />
            </label>
          </tr>
          <tr>
            <label>
              Email
              <input
                type="email"
                placeholder="@gmail.com"
                value={this.state.email}
                onChange={(e) => {
                  this.setState({ email: e.target.value });
                }}
              />
            </label>
          </tr>
          <tr>
            <label>
              Mob no.
              <input
                type="text"
                placeholder="Mobno."
                value={this.state.mobno}
                onChange={(e) => {
                  this.setState({ mobno: e.target.value });
                }}
              />
            </label>
          </tr>
          <tr>
            <label>
              Address
              <input
                type="address"
                placeholder="Address"
                value={this.state.address}
                onChange={(e) => {
                  this.setState({ address: e.target.value });
                }}
              />
            </label>
          </tr>
          <tr>
            <td>
              <button
                type="submit"
                className="btn"
                onClick={() => this.hendleSubmitform(navigate)}
              >
                Submit
              </button>
            </td>
            <td>
              <button className="btn" onClick={() => this.CancelEdit(navigate)}>
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
