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
            <form className="card mx-xl-5" onSubmit={this.handleSubmit}>
              <label>Введите данные: </label>
              <label>
                id:
                <input
                  required
                  name="id"
                  type="id"
                  value={this.state.id}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                firstName:
                <input
                  required
                  name="firstName"
                  type="text"
                  value={this.state.firstName}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                lastName:
                <input
                  required
                  name="lastName"
                  type="text"
                  value={this.state.lastName}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                email:
                <input
                  required
                  name="email"
                  type="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                phone:
                <input
                  required
                  name="phone"
                  type="tel"
                  value={this.state.phone}
                  onChange={this.handleChange}
                />
              </label>
              <input
                disabled={this.isDisabled()}
                type="submit"
                value="Добавить в таблицу"
                className="btn btn-outline-success"
              />
              <button onClick={this.handleClickCancel} className="btn btn-info">
                Oтмена
              </button>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default Form;
