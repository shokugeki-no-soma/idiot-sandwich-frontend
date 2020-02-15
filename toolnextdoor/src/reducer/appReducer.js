export default function loginReducer(state, action) {
  switch (action.type) {
    case "LOGOUT":
      return { login: false };
    case "LOGIN":
      return { login: true };
    case "RENTEE":
      return { appPage: "RENTEE" };
    case "RENTER":
      return { appPage: "RENTER" };
    default:
      throw new Error();
  }
}
