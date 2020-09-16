import React from "react";
import "./Form.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",

      onButtonClick: false,
      onButtonActive: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    let user = {
      id: this.state.id,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      phone: this.state.phone,
      address: {
        streetAddress: "",
        city: "",
        state: "",
        zip: "",
      },
      description: "Это новый пользователь!",
    };

    this.props.addRow(user);

    this.setState({
      onButtonClick: false,
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    });
    event.preventDefault();
  }

  handleClick = () => {
    this.setState({ onButtonClick: true });
  };
  handleClickCancel = () => {
    this.setState({
      onButtonClick: false,
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    });
  };

  isDisabled() {
    const { id, firstName, lastName, email, phone } = this.state;

    /* нужно добавить проверку на уже существующий key */

    if (
      id === "" ||
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      phone === ""
    ) {
      return true;
    } else return false;
  }

  render() {
    return (
      <div>
        {this.state.onButtonClick === false ? (
          <button onClick={this.handleClick} className="btn btn-success">
            Добавить запись
          </button>
        ) : (
          <div>
            <form onSubmit={this.handleSubmit} className="tableForm">
              <div className="headerButton">
                <button
                  className="btn navbar-toggle"
                  onClick={this.handleClickCancel}
                >
                  x
                </button>
              </div>

              <label className="formHeaderlabel">Введите данные: </label>

              <label className="col-form-label-sm">
                id:
                <input
                  className="form-control"
                  required
                  name="id"
                  type="id"
                  pattern="^[0-9]+$"
                  placeholder="12"
                  value={this.state.id}
                  onChange={this.handleChange}
                />
              </label>

              <label className="col-form-label-sm">
                firstName:
                <input
                  className="form-control"
                  required
                  name="firstName"
                  type="text"
                  pattern="^[a-zA-Z]+$"
                  placeholder="Louis"
                  value={this.state.firstName}
                  onChange={this.handleChange}
                />
              </label>

              <label className="col-form-label-sm">
                lastName:
                <input
                  className="form-control"
                  required
                  name="lastName"
                  type="text"
                  pattern="^[a-zA-Z]+$"
                  placeholder="Gunter"
                  value={this.state.lastName}
                  onChange={this.handleChange}
                />
              </label>

              <label className="col-form-label-sm">
                email:
                <input
                  className="form-control"
                  required
                  name="email"
                  type="email"
                  placeholder="example@mail.com"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </label>

              <label className="col-form-label-sm">
                phone:
                <input
                  className="form-control"
                  required
                  name="phone"
                  type="tel"
                  placeholder="(888)888-8888"
                  pattern="\([0-9]{3}\)[0-9]{3}-[0-9]{4}"
                  value={this.state.phone}
                  onChange={this.handleChange}
                />
              </label>
              <br />
              <input
                disabled={this.isDisabled()}
                type="submit"
                value="Добавить в таблицу"
                className="btn btn-success"
              />
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default Form;
