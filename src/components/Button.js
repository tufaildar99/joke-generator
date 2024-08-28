import { React } from "react";

function Button({ callApi }) {
  return <button onClick={callApi}>Click to get a joke</button>;
}
export default Button;
