import React from "react";
import { useState } from "react";
import Yearcard from "../yearcard/yearcard";
import "./checkcard.css";

function Checkcard({ active_year }) {
  const [msg, setMsg] = useState(true);
  const [msg2, setMsg2] = useState(true);
  const [msg3, setMsg3] = useState(true);

  const handle_year1 = (e) => {
    if (msg == false) {
      setMsg(true);
    } else setMsg(false);
    active_year(msg, e.target.id);
    // console.log("target value: ", msg);
  };

  const handle_year2 = (e) => {
    if (msg2 == false) {
      setMsg2(true);
    } else setMsg2(false);
    active_year(msg2, e.target.id);
    // console.log("target value: ", e.target);
  };

  const handle_year3 = (e) => {
    if (msg3 == false) {
      setMsg3(true);
    } else setMsg3(false);
    active_year(msg3, e.target.id);
    // console.log("target value: ", e.target);
  };

  return (
    <div className="cc_container">
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">Check Card</h5>
          <p className="card-text">Select a year</p>

          {/* --------------- year 1 */}
          <div>
            <input
              className="form-check-input"
              type="checkbox"
              value={msg}
              id="year1"
              onClick={(e) => {
                handle_year1(e);
              }}
              // disabled={msg}
            />
            <label className="form-check-label" for="year1">
              2016
            </label>
          </div>
          {/* --------------- year 1 ending */}

          {/* --------------- year 2 */}
          <div>
            <input
              className="form-check-input"
              type="checkbox"
              value={msg2}
              id="year2"
              onClick={(e) => {
                handle_year2(e);
              }}
              // disabled={msg}
            />
            <label className="form-check-label" for="year2">
              2017
            </label>
          </div>
          {/* --------------- year 2 ending */}

          {/* --------------- year 3 */}
          <div>
            <input
              className="form-check-input"
              type="checkbox"
              value={msg3}
              id="year3"
              onClick={(e) => {
                handle_year3(e);
              }}
              // disabled={msg}
            />
            <label className="form-check-label" for="year3">
              2018
            </label>
          </div>
          {/* --------------- year 3 ending */}

          <p>{msg}</p>

          {/* <a href={"#"} className="btn btn-primary">
            Go somewhere
          </a>s */}
        </div>
      </div>
      <Yearcard b1={msg} b2={msg2} b3={msg3} />
    </div>
  );
}

export default Checkcard;
