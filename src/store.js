import { combineReducers, createStore } from "redux";
import customerReducer from "./features/customers/customerSlice";
import reducer from "./features/accounts/accountSlice";

const rootReducer = combineReducers({
  customer: customerReducer,
  account: reducer,
});

const store = createStore(rootReducer);

export default store;
