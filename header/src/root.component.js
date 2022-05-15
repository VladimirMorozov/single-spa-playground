import { Link, BrowserRouter } from "react-router-dom";

export default function Root(props) {
  window.mountCount = window.mountCount || 0;
  window.mountCount++;
  return <>
    <BrowserRouter>
    <p>Count: {window.mountCount}</p>
    <section>{props.name} is mounted!</section>
    <Link to={"app1"}>app 1</Link>
    <br />
    <Link to={"app2"}>app 2</Link>
    </BrowserRouter>
  </>;
}
