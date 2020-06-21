import React, { Component } from 'react';
// import { v4 as uuidv4 } from "uuid";
import styles from './contactForm.module.css';
class ConatctForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = ({target:{name, value}}) =>this.setState({[name]: value });


  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    name !== "" && number!=="" && this.props.onSubmit(name, number);
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={styles.editForm} onSubmit={this.handleSubmit}>
        <label className={styles.label}>
          Name*
          <input
            className={styles.input}
            type="text"
            name="name"
            value={name}
            placeholder="name"
            onChange={this.handleChange}
          />
        </label>
        <label className={styles.label}>
          Phone number*
          <input
            className={styles.input}
            type="number"
            name="number"
            value={number}
            onChange={this.handleChange}
            placeholder="number"
          />
        </label>
        <button className={styles.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ConatctForm;
