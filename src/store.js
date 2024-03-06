import { combineReducers, createStore } from "redux";
import customerReducer from "./features/customers/customerSlice";
import reducer from "./features/accounts/accountSlice";
import paymentReducer from "./features/payment/paymentSlice";

const rootReducer = combineReducers({
  customer: customerReducer,
  account: reducer,
  payment: paymentReducer,
});

const store = createStore(rootReducer);

export default store;
