import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class FormDataDisplay extends React.Component {
  render() {
    const { data } = this.props;
    const { name, email, cpf, address, city, states } = data;
    return (
      <div>
        Form Data Display
        <p>
          Nome:
          {' '}
          {name}
        </p>
        <p>
          Email:
          {' '}
          {email}
        </p>
        <p>
          CPF:
          {' '}
          {cpf}
        </p>
        <p>
          Endereço:
          {' '}
          {address}
        </p>
        <p>
          Cidade:
          {' '}
          {city}
        </p>
        <p>
          Estado:
          {' '}
          {states}
        </p>
      </div>
    );
  }
}

FormDataDisplay.propTypes = {
  data: PropTypes.objectOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  data: state.formReducer,
});

export default connect(mapStateToProps, null)(FormDataDisplay);
