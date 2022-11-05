import React, { Component } from 'react';
import './index.css';
import Footer from './Footer';

const name = 'Folarinde';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]:
        event.target.type === 'checkbox'
          ? event.target.checked
          : event.target.value,
    });
  };
  render() {
    return (
      <div>
        <form id="form_ctn">
          <div>
            <h1>Contact Me</h1>
            <p>
              Hi there, contact me to ask me about anything you have in mind.
            </p>
            <div>
              <div id="flexx">
                <div>
                  <label>First name</label>
                  <br />
                  <input
                    id="first_name"
                    type="text"
                    name="firstName"
                    value={this.state.firstName}
                    onChange={this.handleChange}
                    placeholder="Enter your first name"
                    required
                  ></input>
                </div>
                <div>
                  <label>Last name</label>
                  <br />
                  <input
                    id="last_name"
                    type="text"
                    name="lastName"
                    value={this.state.lastName}
                    onChange={this.handleChange}
                    placeholder="Enter your Last name"
                    required
                  ></input>
                </div>
              </div>
              <label>Email</label>
              <br />
              <input
                id="email"
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                placeholder="yourname@email.com"
                required
              ></input>
              <br />
              <label>Message</label>
              <br />
              <textarea
                id="message"
                name="message"
                value={this.state.message}
                onChange={this.handleChange}
                placeholder="Send me a message and I'll reply you as soon as possible..."
                required
              ></textarea>
              <br />
              <label>
                <input
                  type="checkbox"
                  id="chk"
                  name="accept"
                  checked={this.state.accept}
                  onChange={this.handleChange}
                ></input>
                You agree to providing your data to {name} who may contact you.
              </label>
              <br />
              <button id="btn__submit">Send message</button>
            </div>
          </div>
        </form>
        <Footer />
      </div>
    );
  }
}
