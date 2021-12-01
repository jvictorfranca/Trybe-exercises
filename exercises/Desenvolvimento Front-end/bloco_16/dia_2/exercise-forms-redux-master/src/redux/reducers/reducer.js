const INNITIAL_STATE = {

  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  states: '',

};

const formReducer = (state = INNITIAL_STATE, action) => {
  switch (action.type) {
  case 'DEFAULT_ACTION':
    return { ...state, ...action.value };
  default:
    return { ...state };
  }
};

export default formReducer;
