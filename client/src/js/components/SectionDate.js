const React = require('react');
const InjectChildComponent = require('./Inject.js');
const { Link } = require('react-router-dom');

class SectionDate extends React.Component {
  constructor() {
    super();
  }

  goToRegister() {
    window.open("https://goo.gl/forms/FHYOQ9AsshrXgu1h1");
  }
  render() {
    return (
      <div className="background-section">
       <div className="background-section__date ">
        <span className="do-title appear ">
            ¡GRACIAS!
            {/*<div className="lower-bar"></div>*/}
        </span>

        {
          /*
          <small className="do-date">
          JUNIO 16-18 DEL 2018
          <div className="lower-bar"></div>
          </small>
          */
        }
        </div>
        {
          /*
          <div className="wrap-btn-register">
            {<button onClick={this.goToRegister.bind(this)} className="btn-register">REGISTRO</button>}
          </div>
          */
        }
      </div>
    )
  }
}

module.exports = InjectChildComponent(SectionDate, []);
