import { Link } from "react-router-dom";
import withNavigation from "./navigationLink/navigate";
import { Component } from "react";
import "../form.css";

class FormClass extends Component {
  constructor() {
    super();
    this.state = {
      id: null,
      name: "",
      email: "",
      mobNo: "",
      address: "",
      newList: "",
    };
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
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

    const response = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newLists),
    });
    const json = response.json();
    if (json) {
      this.props.navigate("/employeesC");
    } else {
      console.log("Error:-Data coud not be post");
    }
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
                onChange={this.handleInputChange}
              />
            </label>
          </tr>
          <tr>
            <label>
              Mob no.
              <input
                type="tel"
                placeholder="MobNo"
                name="mobNo"
                onChange={this.handleInputChange}
              />
            </label>
          </tr>
          <tr>
            <label>
              Address
              <input
                type="address"
                name="address"
                placeholder="Address"
                onChange={this.handleInputChange}
              />
            </label>
          </tr>
          <tr>
            <button
              type="submit"
              className="btn"
              onClick={(e) => this.hendleSubmitform(e)}
            >
              Submit
            </button>
          </tr>
          <tr>
            <Link className="link" to="/employeesC">
              Show Data
            </Link>
          </tr>
        </table>
      </div>
    );
  }
}

export default withNavigation(FormClass);
