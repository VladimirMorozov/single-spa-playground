import { useEffect, useState } from "react";
import { Link, BrowserRouter } from "react-router-dom";

export default function Root(props) {
  window.renderCount = window.renderCount || 0;
  window.renderCount++;

  const [authentication, setAuthentication] = useState({ authenticated: false });
  useEffect(() => {
    window.StatePubSub.registerState('authentication', authentication);
    setTimeout(() => {
      let newAuthState = { authenticated: true, name: 'Dan Abramov' };
      setAuthentication(newAuthState);
      window.StatePubSub.dispatchStateChange('authentication', newAuthState);
    }, 5000);
  }, []);

  return <div style={{"backgroundColor": "#BBBBBB"}}>
    <BrowserRouter>
    <p>Count: {window.renderCount}
      {authentication.authenticated && <span> Your name is {authentication.name}</span>}
      {!authentication.authenticated && <span> Not authenticated</span>}
    </p>
    <section>{props.name} is mounted!</section>
    <Link to={"private/app1"}>app 1</Link>
    <br />
    <Link to={"private/app2"}>app 2</Link>
    <br />
    <Link to={"private/vitya"}>vitya</Link>
    </BrowserRouter>
  </div>;
}
