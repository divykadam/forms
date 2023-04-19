import { Component } from "react";

export class EmpEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      employe: this.props.employe,
      id: null,
      name: "",
      email: "",
      mobno: "",
      address: "",
    };
    console.log(this.props.editData);
  }
  //   handleEdit=()=>{
  //   this.props.employe.map((data)=>{
  //     this.setState({id: data.id,
  //           name: data.name,
  //           email: data.email,
  //           mobno: data.mobno,
  //           address: data.address})
  //         })
  // }

  hendleSubmitform = (e) => {
    e.preventDefault();
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
        alert("Result", result);
        window.location = "/showAllC";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <>
        <form>
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
              <button
                type="submit"
                className="btn"
                id="submitBTN"
                onClick={this.hendleSubmitform}
              >
                Submit
              </button>
              {/* <SubmitButton hendleSubmitform={this.hendleSubmitform}/> */}
            </tr>
          </table>
        </form>
      </>
    );
  }
}
export default EmpEdit;
