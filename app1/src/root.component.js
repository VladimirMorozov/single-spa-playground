import { SubComponent } from "./SubComponent";
import * as React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import pic from './pic.jpg';

export default function Root(props) {
  return <BrowserRouter basename="private/app1">
      <p>go deeper</p><Link to="/about">About</Link> <Link to="/">back</Link>
      <Routes>
        <Route path="/" element={<section>{props.name} is mounted!</section>} />
        <Route path="about" element={<SubComponent />} />
      </Routes>
      <img src={logo} className="App-logo" alt="logo" />
      <img src={pic} />
  </BrowserRouter>
}
