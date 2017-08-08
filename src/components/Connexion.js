import React from 'react';

class Connexion extends React.Component {

  goToChat = event => {
    const pseudo = this.pseudoInput.value;
    this.context.router.transitionTo(`/pseudo/${pseudo}`)
  }

  render() {
    return (
      <div className="connexionBox" onSubmit={e => this.goToChat(e)}>
        <form className="connexion form-control">
          <input type="text" placeholder="Pseudo" className="form-control" required ref={input => {this.pseudoInput = input}}/>
          <button type="submit" className="form-control">GO</button>
        </form>
      </div>
    )
  }

  static contextTypes = {
    router: React.PropTypes.object
  }

}



export default Connexion;
