// Initial state
const initialState = {
  amount: 0,
};

// Reducer
export default function paymentReducer(state = initialState, action) {
  switch (action.type) {
    case "pay/Loan":
      return { ...state, amount: action.payload };
    default:
      return state;
  }
}

// Action creators
export function makePayment(amount) {
  return { type: "pay/Loan", payload: amount };
}
