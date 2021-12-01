import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import defaultAction from '../redux/actions';

class PersonalForm extends React.Component {
  // const handleData (event) => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value,
  //   });
  // }

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      states: '',

    };
    this.handleData = this.handleData.bind(this);
  }

  handleData(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { name, cpf, email, address, city, states } = this.state;
    const { saveData } = this.props;
    return (
      <div>
        <fieldset>
          <label htmlFor="name">
            name:
            <input type="text" name="name" value={ name } onChange={ this.handleData } />
          </label>

          <label htmlFor="email">
            email:
            <input
              type="text"
              name="email"
              value={ email }
              onChange={ this.handleData }
            />
          </label>

          <label htmlFor="cpf">
            cpf:
            <input type="text" name="cpf" value={ cpf } onChange={ this.handleData } />
          </label>

          <label htmlFor="address">
            address:
            <input
              type="text"
              name="address"
              value={ address }
              onChange={ this.handleData }
            />
          </label>

          <label htmlFor="City">
            City:
            <input
              type="text"
              name="city"
              value={ city }
              onChange={ this.handleData }
            />
          </label>

          <label htmlFor="states">
            Estados:
            <select
              name="states"
              id="states"
              value={ states }
              onChange={ this.handleData }
            >
              <option value="mg">Minas Gerais</option>
              <option value="sp">Sao Paulo</option>
              <option value="rn">Rio Grande do norte</option>
              <option value="rs">Rio Grande do Sul</option>
            </select>
          </label>

          <button type="button" onClick={ () => saveData(this.state) }>Enviar</button>

        </fieldset>
        <Link to="/formDisplay">Data</Link>
      </div>
    );
  }
}

PersonalForm.propTypes = {
  saveData: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  saveData: (object) => dispatch(defaultAction(object)),
});

export default connect(null, mapDispatchToProps)(PersonalForm);
