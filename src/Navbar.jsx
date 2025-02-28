import { useState } from "react";

function Navbar(props) {
  const username = props.username;
  const age = props.age;
  const [something, setSomething] = useState(true);
  return (
    <nav>
      <h1>hello {username}</h1>
      <h2>your age is {age}</h2>
      <h3>something is {something ? "true" : "false"}</h3>
      <button onClick={() => setSomething(!something)}>Change something</button>
    </nav>
  );
}

export default Navbar;
