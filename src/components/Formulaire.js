import React from 'react';

class Formulaire extends React.Component {

  state = {
    length: this.props.maxLength
  }

  createMessage = event => {
    event.preventDefault();
    const message = {
      message: this.message.value,
      pseudo: this.props.pseudo
    }
    this.props.addMessage(message);
    this.messageForm.reset();
    this.setState({length: this.props.maxLength});
  }

  decrementation = event => {
    length = this.props.maxLength - this.message.value.length;
    this.setState({ length });
  }

  render() {
    return (
      <form className="form" onSubmit={e => this.createMessage(e)} ref={input => this.messageForm = input}>
        <textarea
          name="name"
          rows="8"
          cols="80"
          maxLength={this.props.maxLength}
          ref={input => this.message = input}
          onChange={e => this.decrementation(e)}
          ></textarea>
        <div className="info">{this.state.length}</div>
        <button type="submit" name="button">Envoyer!</button>
      </form>
    )
  }
}

export default Formulaire;
