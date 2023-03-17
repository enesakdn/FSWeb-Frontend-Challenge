import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import GeriDonus from "./GeriDonus";

export default function BasicExample() {
  return (
    <Router>
      <div className="flex flex-col mt-14 h-10 pt-6 pb-24 pl-20 bg-[#F4F4F4]">
        <ul>
          <li>
            <Link to="/"></Link>
          </li>
          <div className="flex flex-row mb-4">
            <li className="p-1 border-2 font-Inter font-semibold border-[#E92577] text-[#E92577] bg-[#DDEEFE]">
              <Link to="/about">Benimle İletişime Geç</Link>
            </li>
          </div>
        </ul>

        <Switch>
          <Route exact path="/">
            <About />
          </Route>
          <Route path="/about">
            <GeriDonus />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function About() {
  return (
    <div>
      <h2>Sayfamı ziyaret ettiğiniz için teşekkür ederim.</h2>
    </div>
  );
}
