import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import GeriDonus from "./GeriDonus";

export default function BasicExample() {
  return (
    <Router>
      <div className="flex flex-col h-10 pt-6 pb-24   bg-[#F4F4F4]">
        <ul>
          <li>
            <Link to="/"></Link>
          </li>
          <div className="flex flex-row ">
            <li className=" ml-20 p-2 bg-[#f88daf] hover:bg-[#E92577] text-white font-bold rounded">
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
      <h2 className="pl-20">
        Sayfamı ziyaret ettiğiniz için teşekkür ederim.😊
      </h2>
    </div>
  );
}
