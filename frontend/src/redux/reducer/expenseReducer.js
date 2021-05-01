import {
  SUMMARY_LOADED,
  SUMMARY_LOAD_ERROR,
  ADD_TRANSACTION,
  ADD_TRANSACTION_ERROR,
  GET_TRANSACTIONS
} from '../actions/actionTypes';

const initialState = {
  loading: true,
  summary: {},
  success: false,
  expenseList: {},
  incomeList: {},
  expenseTotal: 0,
  incomeTotal: 0,
  incomeArray: [],
  expenseArray: [],
  avlBalance: 0,
  transactions: [],
};

const expenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUMMARY_LOADED:
      return {
        ...state,
        loading: false,
        success: true,
        summary: action.payload,
        expenseList: action.payload.expenseList,
        incomeList: action.payload.incomeList,
        expenseTotal: action.payload.expenseList.totalAmount,
        incomeTotal: action.payload.incomeList.totalAmount,
        incomeArray: action.payload.incomeList.transactionArray,
        expenseArray: action.payload.expenseList.transactionArray,
        avlBalance:
          action.payload.incomeList.totalAmount -
          action.payload.expenseList.totalAmount,
        transaction: {},
      };
    case SUMMARY_LOAD_ERROR:
      return {
        ...state,
        loading: false,
        success: false,
        summary: {},
      };
    case ADD_TRANSACTION:
     return {
       ...state,
       loading:false,
       transactions:[action.payload.data,...state.transactions]
     }
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
        loading:false,
        transactions:action.payload.data
      }
    default:
      return state;
  }
};

export default expenseReducer;
