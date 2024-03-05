const initialCustomer = {
  fullName: "",
  nationalID: "",
  createdAt: null,
};

export default function customerReducer(state = initialCustomer, action) {
  switch (action.type) {
    case "customer/create":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };
    default:
      return state;
  }
}

export function createCustomer(fullName, nationalID) {
  return {
    type: "customer/create",
    payload: { fullName, nationalID, createdAt: new Date().toISOString() },
  };
}
