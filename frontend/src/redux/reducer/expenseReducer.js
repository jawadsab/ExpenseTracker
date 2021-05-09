import {
  ADD_TRANSACTION,
  ADD_TRANSACTION_ERROR,
  GET_TRANSACTIONS,
} from '../actions/actionTypes';

const initialState = {
  loading: true,
  summary: {},
  success: false,

  transactions: [],
};

const expenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TRANSACTION:
      return {
        ...state,
        loading: false,
        transactions: [action.payload.data, ...state.transactions],
      };
    case ADD_TRANSACTION_ERROR:
      return {
        ...state,
        loading: false,
        success: false,
        transaction: {},
      };
    case GET_TRANSACTIONS:
      return {
        ...state,
        loading: false,
        transactions: action.payload.data,
      };
    default:
      return state;
  }
};

export default expenseReducer;
