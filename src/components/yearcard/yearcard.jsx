import React from "react";
import "./yearcard.css";
import { useState } from "react";
function Yearcard({ b1, b2, b3 }) {
  const [month, setmonth] = useState(""); //for year 2016
  const [month2, setmonth2] = useState(""); // for year 2017
  const [month3, setmonth3] = useState(""); //  for year 2018

  const [num, setNum] = useState(0);
  const [feb1_n, setf1] = useState(0);
  const [mar1_n, setm1] = useState(0);
  const [apr1_n, setap1] = useState(0);

  const [may1_n, setmay1] = useState(0);
  const [jun1_n, setjun1] = useState(0);
  const [jul1_n, setjul1] = useState(0);
  const [aug1_n, setaug1] = useState(0);

  const [sep1_n, setsep1] = useState(0);
  const [oct1_n, setoct1] = useState(0);
  const [nov1_n, setnov1] = useState(0);
  const [dec1_n, setdec1] = useState(0);

  const [num2, setNum2] = useState(0);
  const [feb2_n, setf2] = useState(0);
  const [mar2_n, setm2] = useState(0);
  const [apr2_n, setap2] = useState(0);

  const [may2_n, setmay2] = useState(0);
  const [jun2_n, setjun2] = useState(0);
  const [jul2_n, setjul2] = useState(0);
  const [aug2_n, setaug2] = useState(0);

  const [sep2_n, setsep2] = useState(0);
  const [oct2_n, setoct2] = useState(0);
  const [nov2_n, setnov2] = useState(0);
  const [dec2_n, setdec2] = useState(0);

  const [num3, setNum3] = useState(0);
  const [feb3_n, setf3] = useState(0);
  const [mar3_n, setm3] = useState(0);
  const [apr3_n, setap3] = useState(0);

  const [may3_n, setmay3] = useState(0);
  const [jun3_n, setjun3] = useState(0);
  const [jul3_n, setjul3] = useState(0);
  const [aug3_n, setaug3] = useState(0);

  const [sep3_n, setsep3] = useState(0);
  const [oct3_n, setoct3] = useState(0);
  const [nov3_n, setnov3] = useState(0);
  const [dec3_n, setdec3] = useState(0);

  const handle = (e) => {
    setmonth(e.target.id);
    // console.log(e.target.id);
    console.log(month);
  };
  const handle2 = (e) => {
    // fr yeqar 2017
    setmonth2(e.target.id);
    // console.log(e.target.id);
    console.log(month2);
  };
  const handle3 = (e) => {
    // fr year 2018
    setmonth3(e.target.id);
    // console.log(e.target.id);
    console.log(month3);
  };

  const handlesub = (e) => {
    // setmonth(e.target.id);
    // console.log(e.target.id);
    // console.log(e.target);
    // let x = parseInt(document.getElementById("jan_1").value);
    // let y = document.getElementById("feb_1").value;
    // let z = document.getElementById("mar_1").value;
    // let u = document.getElementById("apr_1").value;
    // console.log(x, y, z, u);
    // jan-apr
    if (num != 0) {
      setf1(num + 14);
      setm1(num + 42);
      setap1(num + 35);
    } else if (feb1_n != 0) {
      setNum(feb1_n + 14);
      setm1(feb1_n + 42);
      setap1(feb1_n + 35);
    } else if (mar1_n != 0) {
      setNum(mar1_n + 14);
      setf1(mar1_n + 42);
      setap1(mar1_n + 35);
    } else if (apr1_n != 0) {
      setNum(apr1_n + 14);
      setf1(apr1_n + 42);
      setm1(apr1_n + 35);
    }

    //may-aug
    if (may1_n != 0) {
      setjun1(may1_n + 14);
      setjul1(may1_n + 42);
      setaug1(may1_n + 35);
    } else if (jun1_n != 0) {
      setmay1(jun1_n + 14);
      setjul1(jun1_n + 42);
      setaug1(jun1_n + 35);
    } else if (jul1_n != 0) {
      setmay1(jul1_n + 14);
      setjun1(jul1_n + 42);
      setaug1(jul1_n + 35);
    } else if (aug1_n != 0) {
      setmay1(aug1_n + 14);
      setjul1(aug1_n + 42);
      setjun1(aug1_n + 35);
    }

    //sep-dec
    if (sep1_n != 0) {
      setoct1(sep1_n + 14);
      setnov1(sep1_n + 42);
      setdec1(sep1_n + 35);
    } else if (oct1_n != 0) {
      setsep1(oct1_n + 14);
      setnov1(oct1_n + 42);
      setdec1(oct1_n + 35);
    } else if (nov1_n != 0) {
      setsep1(nov1_n + 14);
      setoct1(nov1_n + 42);
      setdec1(nov1_n + 35);
    } else if (dec1_n != 0) {
      setsep1(dec1_n + 14);
      setnov1(dec1_n + 42);
      setoct1(dec1_n + 35);
    }

    //NOTE year 2017
    // jan-apr
    if (num2 != 0) {
      setf2(num2 + 14);
      setm2(num2 + 42);
      setap2(num2 + 35);
    } else if (feb2_n != 0) {
      setNum2(feb2_n + 14);
      setm2(feb2_n + 42);
      setap2(feb2_n + 35);
    } else if (mar2_n != 0) {
      setNum2(mar2_n + 14);
      setf2(mar2_n + 42);
      setap2(mar2_n + 35);
    } else if (apr2_n != 0) {
      setNum2(apr2_n + 14);
      setf2(apr2_n + 42);
      setm2(apr2_n + 35);
    }

    //may-aug
    if (may2_n != 0) {
      setjun2(may2_n + 14);
      setjul2(may2_n + 42);
      setaug2(may2_n + 35);
    } else if (jun2_n != 0) {
      setmay2(jun2_n + 14);
      setjul2(jun2_n + 42);
      setaug2(jun2_n + 35);
    } else if (jul2_n != 0) {
      setmay2(jul2_n + 14);
      setjun2(jul2_n + 42);
      setaug2(jul2_n + 35);
    } else if (aug2_n != 0) {
      setmay2(aug2_n + 14);
      setjul2(aug2_n + 42);
      setjun2(aug2_n + 35);
    }

    //sep-dec
    if (sep2_n != 0) {
      setoct2(sep2_n + 14);
      setnov2(sep2_n + 42);
      setdec2(sep2_n + 35);
    } else if (oct2_n != 0) {
      setsep2(oct2_n + 14);
      setnov2(oct2_n + 42);
      setdec2(oct2_n + 35);
    } else if (nov2_n != 0) {
      setsep2(nov2_n + 14);
      setoct2(nov2_n + 42);
      setdec2(nov2_n + 35);
    } else if (dec2_n != 0) {
      setsep2(dec2_n + 14);
      setnov2(dec2_n + 42);
      setoct2(dec2_n + 35);
    }
    //NOTE year 2018
    // jan-apr
    if (num3 != 0) {
      setf3(num3 + 14);
      setm3(num3 + 42);
      setap3(num3 + 35);
    } else if (feb3_n != 0) {
      setNum3(feb3_n + 14);
      setm3(feb3_n + 42);
      setap3(feb3_n + 35);
    } else if (mar3_n != 0) {
      setNum3(mar3_n + 14);
      setf3(mar3_n + 42);
      setap3(mar3_n + 35);
    } else if (apr3_n != 0) {
      setNum3(apr3_n + 14);
      setf3(apr3_n + 42);
      setm3(apr3_n + 35);
    }

    //may-aug
    if (may3_n != 0) {
      setjun3(may3_n + 14);
      setjul3(may3_n + 42);
      setaug3(may3_n + 35);
    } else if (jun3_n != 0) {
      setmay3(jun3_n + 14);
      setjul3(jun3_n + 42);
      setaug3(jun3_n + 35);
    } else if (jul3_n != 0) {
      setmay3(jul3_n + 14);
      setjun3(jul3_n + 42);
      setaug3(jul3_n + 35);
    } else if (aug3_n != 0) {
      setmay3(aug3_n + 14);
      setjul3(aug3_n + 42);
      setjun3(aug3_n + 35);
    }

    //sep-dec
    if (sep3_n != 0) {
      setoct3(sep3_n + 14);
      setnov3(sep3_n + 42);
      setdec3(sep3_n + 35);
    } else if (oct3_n != 0) {
      setsep3(oct3_n + 14);
      setnov3(oct3_n + 42);
      setdec3(oct3_n + 35);
    } else if (nov3_n != 0) {
      setsep3(nov3_n + 14);
      setoct3(nov3_n + 42);
      setdec3(nov3_n + 35);
    } else if (dec3_n != 0) {
      setsep3(dec3_n + 14);
      setnov3(dec3_n + 42);
      setoct3(dec3_n + 35);
    }

    var inputs = document.getElementsByClassName("form-control");
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].disabled = false;
    }
  };

  const handlechange = (e) => {
    // console.log(e.target);
    let id = e.target.id;
    console.log(id);

    // jan-apr
    if (id == "jan_1") setNum(parseInt(e.target.value));
    else if (id == "feb_1") setf1(parseInt(e.target.value));
    else if (id == "mar_1") setm1(parseInt(e.target.value));
    else if (id == "jan_1") setap1(parseInt(e.target.value));
    if (id == "jan_1") {
      document.getElementById("feb_1").setAttribute("disabled", "");
      document.getElementById("mar_1").setAttribute("disabled", "");
      document.getElementById("apr_1").setAttribute("disabled", "");
    } else if (id == "feb_1") {
      document.getElementById("jan_1").setAttribute("disabled", "");
      document.getElementById("mar_1").setAttribute("disabled", "");
      document.getElementById("apr_1").setAttribute("disabled", "");
    } else if (id == "mar_1") {
      document.getElementById("jan_1").setAttribute("disabled", "");
      document.getElementById("feb_1").setAttribute("disabled", "");
      document.getElementById("apr_1").setAttribute("disabled", "");
    } else if (id == "apr_1") {
      document.getElementById("jan_1").setAttribute("disabled", "");
      document.getElementById("feb_1").setAttribute("disabled", "");
      document.getElementById("mar_1").setAttribute("disabled", "");
    }

    // may-aug
    if (id == "may_1") setmay1(parseInt(e.target.value));
    else if (id == "jun_1") setjun1(parseInt(e.target.value));
    else if (id == "jul_1") setjul1(parseInt(e.target.value));
    else if (id == "aug_1") setaug1(parseInt(e.target.value));
    if (id == "may_1") {
      document.getElementById("jun_1").setAttribute("disabled", "");
      document.getElementById("jul_1").setAttribute("disabled", "");
      document.getElementById("aug_1").setAttribute("disabled", "");
    } else if (id == "jun_1") {
      document.getElementById("may_1").setAttribute("disabled", "");
      document.getElementById("jul_1").setAttribute("disabled", "");
      document.getElementById("aug_1").setAttribute("disabled", "");
    } else if (id == "jul_1") {
      document.getElementById("jun_1").setAttribute("disabled", "");
      document.getElementById("may_1").setAttribute("disabled", "");
      document.getElementById("aug_1").setAttribute("disabled", "");
    } else if (id == "aug_1") {
      document.getElementById("jun_1").setAttribute("disabled", "");
      document.getElementById("jul_1").setAttribute("disabled", "");
      document.getElementById("may_1").setAttribute("disabled", "");
    }

    //sep-dec
    if (id == "sep_1") setsep1(parseInt(e.target.value));
    else if (id == "oct_1") setoct1(parseInt(e.target.value));
    else if (id == "nov_1") setnov1(parseInt(e.target.value));
    else if (id == "dec_1") setdec1(parseInt(e.target.value));
    if (id == "sep_1") {
      document.getElementById("oct_1").setAttribute("disabled", "");
      document.getElementById("nov_1").setAttribute("disabled", "");
      document.getElementById("dec_1").setAttribute("disabled", "");
    } else if (id == "oct_1") {
      document.getElementById("sep_1").setAttribute("disabled", "");
      document.getElementById("nov_1").setAttribute("disabled", "");
      document.getElementById("dec_1").setAttribute("disabled", "");
    } else if (id == "nov_1") {
      document.getElementById("oct_1").setAttribute("disabled", "");
      document.getElementById("sep_1").setAttribute("disabled", "");
      document.getElementById("dec_1").setAttribute("disabled", "");
    } else if (id == "dec_1") {
      document.getElementById("oct_1").setAttribute("disabled", "");
      document.getElementById("nov_1").setAttribute("disabled", "");
      document.getElementById("sep_1").setAttribute("disabled", "");
    }

    //NOTE year 2017
    // jan-apr
    if (id == "jan_2") setNum2(parseInt(e.target.value));
    else if (id == "feb_2") setf2(parseInt(e.target.value));
    else if (id == "mar_2") setm2(parseInt(e.target.value));
    else if (id == "jan_2") setap2(parseInt(e.target.value));
    if (id == "jan_2") {
      document.getElementById("feb_2").setAttribute("disabled", "");
      document.getElementById("mar_2").setAttribute("disabled", "");
      document.getElementById("apr_2").setAttribute("disabled", "");
    } else if (id == "feb_2") {
      document.getElementById("jan_2").setAttribute("disabled", "");
      document.getElementById("mar_2").setAttribute("disabled", "");
      document.getElementById("apr_2").setAttribute("disabled", "");
    } else if (id == "mar_2") {
      document.getElementById("jan_2").setAttribute("disabled", "");
      document.getElementById("feb_2").setAttribute("disabled", "");
      document.getElementById("apr_2").setAttribute("disabled", "");
    } else if (id == "apr_2") {
      document.getElementById("jan_2").setAttribute("disabled", "");
      document.getElementById("feb_2").setAttribute("disabled", "");
      document.getElementById("mar_2").setAttribute("disabled", "");
    }

    // may-aug
    if (id == "may_2") setmay2(parseInt(e.target.value));
    else if (id == "jun_2") setjun2(parseInt(e.target.value));
    else if (id == "jul_2") setjul2(parseInt(e.target.value));
    else if (id == "aug_2") setaug2(parseInt(e.target.value));
    if (id == "may_2") {
      document.getElementById("jun_2").setAttribute("disabled", "");
      document.getElementById("jul_2").setAttribute("disabled", "");
      document.getElementById("aug_2").setAttribute("disabled", "");
    } else if (id == "jun_2") {
      document.getElementById("may_2").setAttribute("disabled", "");
      document.getElementById("jul_2").setAttribute("disabled", "");
      document.getElementById("aug_2").setAttribute("disabled", "");
    } else if (id == "jul_2") {
      document.getElementById("jun_2").setAttribute("disabled", "");
      document.getElementById("may_2").setAttribute("disabled", "");
      document.getElementById("aug_2").setAttribute("disabled", "");
    } else if (id == "aug_2") {
      document.getElementById("jun_2").setAttribute("disabled", "");
      document.getElementById("jul_2").setAttribute("disabled", "");
      document.getElementById("may_2").setAttribute("disabled", "");
    }

    //sep-dec
    if (id == "sep_2") setsep2(parseInt(e.target.value));
    else if (id == "oct_2") setoct2(parseInt(e.target.value));
    else if (id == "nov_2") setnov2(parseInt(e.target.value));
    else if (id == "dec_2") setdec2(parseInt(e.target.value));
    if (id == "sep_2") {
      document.getElementById("oct_2").setAttribute("disabled", "");
      document.getElementById("nov_2").setAttribute("disabled", "");
      document.getElementById("dec_2").setAttribute("disabled", "");
    } else if (id == "oct_2") {
      document.getElementById("sep_2").setAttribute("disabled", "");
      document.getElementById("nov_2").setAttribute("disabled", "");
      document.getElementById("dec_2").setAttribute("disabled", "");
    } else if (id == "nov_2") {
      document.getElementById("oct_2").setAttribute("disabled", "");
      document.getElementById("sep_2").setAttribute("disabled", "");
      document.getElementById("dec_2").setAttribute("disabled", "");
    } else if (id == "dec_2") {
      document.getElementById("oct_2").setAttribute("disabled", "");
      document.getElementById("nov_2").setAttribute("disabled", "");
      document.getElementById("sep_2").setAttribute("disabled", "");
    }
    //NOTE year 2018
    // jan-apr
    if (id == "jan_3") setNum3(parseInt(e.target.value));
    else if (id == "feb_3") setf3(parseInt(e.target.value));
    else if (id == "mar_3") setm3(parseInt(e.target.value));
    else if (id == "jan_3") setap3(parseInt(e.target.value));
    if (id == "jan_3") {
      document.getElementById("feb_3").setAttribute("disabled", "");
      document.getElementById("mar_3").setAttribute("disabled", "");
      document.getElementById("apr_3").setAttribute("disabled", "");
    } else if (id == "feb_3") {
      document.getElementById("jan_3").setAttribute("disabled", "");
      document.getElementById("mar_3").setAttribute("disabled", "");
      document.getElementById("apr_3").setAttribute("disabled", "");
    } else if (id == "mar_3") {
      document.getElementById("jan_3").setAttribute("disabled", "");
      document.getElementById("feb_3").setAttribute("disabled", "");
      document.getElementById("apr_3").setAttribute("disabled", "");
    } else if (id == "apr_3") {
      document.getElementById("jan_3").setAttribute("disabled", "");
      document.getElementById("feb_3").setAttribute("disabled", "");
      document.getElementById("mar_3").setAttribute("disabled", "");
    }

    // may-aug
    if (id == "may_3") setmay3(parseInt(e.target.value));
    else if (id == "jun_3") setjun3(parseInt(e.target.value));
    else if (id == "jul_3") setjul3(parseInt(e.target.value));
    else if (id == "aug_3") setaug3(parseInt(e.target.value));
    if (id == "may_3") {
      document.getElementById("jun_3").setAttribute("disabled", "");
      document.getElementById("jul_3").setAttribute("disabled", "");
      document.getElementById("aug_3").setAttribute("disabled", "");
    } else if (id == "jun_3") {
      document.getElementById("may_3").setAttribute("disabled", "");
      document.getElementById("jul_3").setAttribute("disabled", "");
      document.getElementById("aug_3").setAttribute("disabled", "");
    } else if (id == "jul_3") {
      document.getElementById("jun_3").setAttribute("disabled", "");
      document.getElementById("may_3").setAttribute("disabled", "");
      document.getElementById("aug_3").setAttribute("disabled", "");
    } else if (id == "aug_3") {
      document.getElementById("jun_3").setAttribute("disabled", "");
      document.getElementById("jul_3").setAttribute("disabled", "");
      document.getElementById("may_3").setAttribute("disabled", "");
    }

    //sep-dec
    if (id == "sep_3") setsep3(parseInt(e.target.value));
    else if (id == "oct_3") setoct3(parseInt(e.target.value));
    else if (id == "nov_3") setnov3(parseInt(e.target.value));
    else if (id == "dec_3") setdec3(parseInt(e.target.value));
    if (id == "sep_3") {
      document.getElementById("oct_3").setAttribute("disabled", "");
      document.getElementById("nov_3").setAttribute("disabled", "");
      document.getElementById("dec_3").setAttribute("disabled", "");
    } else if (id == "oct_3") {
      document.getElementById("sep_3").setAttribute("disabled", "");
      document.getElementById("nov_3").setAttribute("disabled", "");
      document.getElementById("dec_3").setAttribute("disabled", "");
    } else if (id == "nov_3") {
      document.getElementById("oct_3").setAttribute("disabled", "");
      document.getElementById("sep_3").setAttribute("disabled", "");
      document.getElementById("dec_3").setAttribute("disabled", "");
    } else if (id == "dec_3") {
      document.getElementById("oct_3").setAttribute("disabled", "");
      document.getElementById("nov_3").setAttribute("disabled", "");
      document.getElementById("sep_3").setAttribute("disabled", "");
    }
  };

  const handlereset = (e) => {
    console.log(e.target.id);
    if (e.target.id == "jan1") {
      setNum(0);
      setap1(0);
      setf1(0);
      setm1(0);
    } else if (e.target.id == "may1") {
      setmay1(0);
      setjul1(0);
      setjun1(0);
      setaug1(0);
    } else if (e.target.id == "sep1") {
      setsep1(0);
      setoct1(0);
      setnov1(0);
      setdec1(0);
    } else if (e.target.id == "jan2") {
      setNum2(0);
      setap2(0);
      setf2(0);
      setm2(0);
    } else if (e.target.id == "may2") {
      setmay2(0);
      setjul2(0);
      setjun2(0);
      setaug2(0);
    } else if (e.target.id == "sep2") {
      setsep2(0);
      setoct2(0);
      setnov2(0);
      setdec2(0);
    } else if (e.target.id == "jan3") {
      setNum3(0);
      setap3(0);
      setf3(0);
      setm3(0);
    } else if (e.target.id == "may3") {
      setmay3(0);
      setjul3(0);
      setjun3(0);
      setaug3(0);
    } else if (e.target.id == "sep3") {
      setsep3(0);
      setoct3(0);
      setnov3(0);
      setdec3(0);
    }
  };

  return (
    <div className="yc_container">
      <div className="year1_card" style={{ display: b1 ? "none" : "flex" }}>
        <div className="card" style={{ width: "18rem" }}>
          {/* <img src="..." class="card-img-top" alt="..."> */}
          <div className="card-body">
            <h5 className="card-title"> Year {b1 ? "" : "2016"}</h5>
            <p className="card-text">
              <div class="dropdown">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown button
                </button>

                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#" onClick={handle} id="jan">
                      Jan - Apr
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="#"
                      onClick={(e) => handle(e)}
                      id="may"
                    >
                      May - Aug
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="#"
                      onClick={(e) => handle(e)}
                      id="sep"
                    >
                      Sep - Dec
                    </a>
                  </li>
                </ul>
              </div>
            </p>

            {/* <a href="#" class="btn btn-primary">
              Go somewhere
            </a> */}
            {/* {month} */}
            {/* NOTE JAN to APR */}
            <div style={{ display: month == "jan" ? "" : "none" }}>
              <button type="submit" onClick={handlereset} id="jan1">
                RESET
              </button>
              <form
                className="input_cont"
                style={{ display: month == "" ? "none" : "" }}
              >
                {/* inp 1 */}
                <div class="input-group input-group-sm mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-sm">
                    {month == "jan" ? "Jan" : ""}
                    {month == "may" ? "May" : ""}
                    {month == "sep" ? "Sep" : ""}
                  </span>
                  <input
                    type="number"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    value={num}
                    onChange={handlechange}
                    id="jan_1"
                    // placeholder="0"
                  />
                </div>
                {/* inp 1 end */}
                {/* inp 2 */}
                <div class="input-group input-group-sm mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-sm">
                    {month == "jan" ? "Feb" : ""}
                    {month == "may" ? "June" : ""}
                    {month == "sep" ? "Oct" : ""}
                  </span>
                  <input
                    type="number"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    value={feb1_n}
                    onChange={handlechange}
                    id="feb_1"
                  />
                </div>
                {/* inp 2 end */}
                {/* inp 3 */}
                <div class="input-group input-group-sm mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-sm">
                    {month == "jan" ? "Mar" : ""}
                    {month == "may" ? "July" : ""}
                    {month == "sep" ? "Nov" : ""}
                  </span>
                  <input
                    type="nummber"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    value={mar1_n}
                    onChange={handlechange}
                    id="mar_1"
                  />
                </div>
                {/* inp 3 end */}
                {/* inp 4 */}
                <div class="input-group input-group-sm mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-sm">
                    {month == "jan" ? "Apr" : ""}
                    {month == "may" ? "Aug" : ""}
                    {month == "sep" ? "Dec" : ""}
                  </span>
                  <input
                    type="number"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    value={apr1_n}
                    onChange={handlechange}
                    id="apr_1"
                  />
                </div>
                {/* inp4 end */}
                <button type="submit" onClick={handlesub}>
                  submit
                </button>
              </form>
            </div>
            {/* NOTE JAN to APR END */}

            {/* NOTE MAY to AUG  */}

            <div style={{ display: month == "may" ? "" : "none" }}>
              <button type="submit" onClick={handlereset} id="may1">
                RESET
              </button>
              <form
                className="input_cont"
                style={{ display: month == "" ? "none" : "" }}
              >
                {/* inp 1 */}
                <div class="input-group input-group-sm mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-sm">
                    {month == "jan" ? "Jan" : ""}
                    {month == "may" ? "May" : ""}
                    {month == "sep" ? "Sep" : ""}
                  </span>
                  <input
                    type="number"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    value={may1_n}
                    onChange={handlechange}
                    id="may_1"
                  />
                </div>
                {/* inp 1 end */}
                {/* inp 2 */}
                <div class="input-group input-group-sm mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-sm">
                    {month == "jan" ? "Feb" : ""}
                    {month == "may" ? "June" : ""}
                    {month == "sep" ? "Oct" : ""}
                  </span>
                  <input
                    type="number"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    value={jun1_n}
                    onChange={handlechange}
                    id="jun_1"
                  />
                </div>
                {/* inp 2 end */}
                {/* inp 3 */}
                <div class="input-group input-group-sm mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-sm">
                    {month == "jan" ? "Mar" : ""}
                    {month == "may" ? "July" : ""}
                    {month == "sep" ? "Nov" : ""}
                  </span>
                  <input
                    type="number"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    value={jul1_n}
                    id="jul_1"
                    onChange={handlechange}
                  />
                </div>
                {/* inp 3 end */}
                {/* inp 4 */}
                <div class="input-group input-group-sm mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-sm">
                    {month == "jan" ? "Apr" : ""}
                    {month == "may" ? "Aug" : ""}
                    {month == "sep" ? "Dec" : ""}
                  </span>
                  <input
                    type="number"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    value={aug1_n}
                    id="aug_1"
                    onChange={handlechange}
                  />
                </div>
                {/* inp4 end */}
                <button type="submit" onClick={handlesub}>
                  submit
                </button>
              </form>
            </div>
            {/* NOTE MAY to AUG END */}

            {/* NOTE SEP to DEC  */}

            <div style={{ display: month == "sep" ? "" : "none" }}>
              <button type="submit" onClick={handlereset} id="sep1">
                RESET
              </button>
              <form
                className="input_cont"
                style={{ display: month == "" ? "none" : "" }}
              >
                {/* inp 1 */}
                <div class="input-group input-group-sm mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-sm">
                    {month == "jan" ? "Jan" : ""}
                    {month == "may" ? "May" : ""}
                    {month == "sep" ? "Sep" : ""}
                  </span>
                  <input
                    type="number"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    value={sep1_n}
                    id="sep_1"
                    onChange={handlechange}
                  />
                </div>
                {/* inp 1 end */}
                {/* inp 2 */}
                <div class="input-group input-group-sm mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-sm">
                    {month == "jan" ? "Feb" : ""}
                    {month == "may" ? "June" : ""}
                    {month == "sep" ? "Oct" : ""}
                  </span>
                  <input
                    type="number"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    id="oct_1"
                    value={oct1_n}
                    onChange={handlechange}
                  />
                </div>
                {/* inp 2 end */}
                {/* inp 3 */}
                <div class="input-group input-group-sm mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-sm">
                    {month == "jan" ? "Mar" : ""}
                    {month == "may" ? "July" : ""}
                    {month == "sep" ? "Nov" : ""}
                  </span>
                  <input
                    type="number"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    id="nov_1"
                    value={nov1_n}
                    onChange={handlechange}
                  />
                </div>
                {/* inp 3 end */}
                {/* inp 4 */}
                <div class="input-group input-group-sm mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-sm">
                    {month == "jan" ? "Apr" : ""}
                    {month == "may" ? "Aug" : ""}
                    {month == "sep" ? "Dec" : ""}
                  </span>
                  <input
                    type="number"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    value={dec1_n}
                    onChange={handlechange}
                    id="dec_1"
                  />
                </div>
                {/* inp4 end */}
                <button type="submit" onClick={handlesub}>
                  submit
                </button>
              </form>
            </div>
            {/* NOTE SEP to DEC END */}
          </div>
        </div>
      </div>
      {/* card 1 end */}

      {/* card 2 start   */}
      <div className="year1_card" style={{ display: b2 ? "none" : "flex" }}>
        <div className="card" style={{ width: "18rem" }}>
          {/* <img src="..." class="card-img-top" alt="..."> */}
          <div className="card-body">
            <h5 className="card-title">Year {b2 ? "" : "2017"}</h5>
            <p className="card-text">
              <div class="dropdown">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown button
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a
                      class="dropdown-item"
                      onClick={handle2}
                      href="#"
                      id="jan"
                    >
                      Jan - Apr
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      onClick={handle2}
                      id="may"
                      href="#"
                    >
                      May - Aug
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      onClick={handle2}
                      id="sep"
                      href="#"
                    >
                      Sep - Dec
                    </a>
                  </li>
                </ul>
              </div>
            </p>
            {/* {month2} */}
            {/* NOTE JAN to APR */}
            <div style={{ display: month2 == "jan" ? "" : "none" }}>
              <button type="submit" onClick={handlereset} id="jan2">
                RESET
              </button>
              <form
                className="input_cont"
                style={{ display: month2 == "" ? "none" : "" }}
              >
                {/* inp 1 */}
                <div class="input-group input-group-sm mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-sm">
                    {month2 == "jan" ? "Jan" : ""}
                    {month2 == "may" ? "May" : ""}
                    {month2 == "sep" ? "Sep" : ""}
                  </span>
                  <input
                    type="number"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    value={num2}
                    onChange={handlechange}
                    id="jan_2"
                    // placeholder="0"
                  />
                </div>
                {/* inp 1 end */}
                {/* inp 2 */}
                <div class="input-group input-group-sm mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-sm">
                    {month2 == "jan" ? "Feb" : ""}
                    {month2 == "may" ? "June" : ""}
                    {month2 == "sep" ? "Oct" : ""}
                  </span>
                  <input
                    type="number"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    value={feb2_n}
                    onChange={handlechange}
                    id="feb_2"
                  />
                </div>
                {/* inp 2 end */}
                {/* inp 3 */}
                <div class="input-group input-group-sm mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-sm">
                    {month2 == "jan" ? "Mar" : ""}
                    {month2 == "may" ? "July" : ""}
                    {month2 == "sep" ? "Nov" : ""}
                  </span>
                  <input
                    type="nummber"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    value={mar2_n}
                    onChange={handlechange}
                    id="mar_2"
                  />
                </div>
                {/* inp 3 end */}
                {/* inp 4 */}
                <div class="input-group input-group-sm mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-sm">
                    {month2 == "jan" ? "Apr" : ""}
                    {month2 == "may" ? "Aug" : ""}
                    {month2 == "sep" ? "Dec" : ""}
                  </span>
                  <input
                    type="number"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    value={apr2_n}
                    onChange={handlechange}
                    id="apr_2"
                  />
                </div>
                {/* inp4 end */}
                <button type="submit" onClick={handlesub}>
                  submit
                </button>
              </form>
            </div>
            {/* NOTE JAN to APR END */}
            {/* NOTE MAY to AUG  */}

            <div style={{ display: month2 == "may" ? "" : "none" }}>
              <button type="submit" onClick={handlereset} id="may2">
                RESET
              </button>
              <form
                className="input_cont"
                style={{ display: month2 == "" ? "none" : "" }}
              >
                {/* inp 1 */}
                <div class="input-group input-group-sm mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-sm">
                    {month2 == "jan" ? "Jan" : ""}
                    {month2 == "may" ? "May" : ""}
                    {month2 == "sep" ? "Sep" : ""}
                  </span>
                  <input
                    type="number"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    value={may2_n}
                    onChange={handlechange}
                    id="may_2"
                  />
                </div>
                {/* inp 1 end */}
                {/* inp 2 */}
                <div class="input-group input-group-sm mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-sm">
                    {month2 == "jan" ? "Feb" : ""}
                    {month2 == "may" ? "June" : ""}
                    {month2 == "sep" ? "Oct" : ""}
                  </span>
                  <input
                    type="number"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    value={jun2_n}
                    onChange={handlechange}
                    id="jun_2"
                  />
                </div>
                {/* inp 2 end */}
                {/* inp 3 */}
                <div class="input-group input-group-sm mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-sm">
                    {month2 == "jan" ? "Mar" : ""}
                    {month2 == "may" ? "July" : ""}
                    {month2 == "sep" ? "Nov" : ""}
                  </span>
                  <input
                    type="number"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    value={jul2_n}
                    id="jul_2"
                    onChange={handlechange}
                  />
                </div>
                {/* inp 3 end */}
                {/* inp 4 */}
                <div class="input-group input-group-sm mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-sm">
                    {month2 == "jan" ? "Apr" : ""}
                    {month2 == "may" ? "Aug" : ""}
                    {month2 == "sep" ? "Dec" : ""}
                  </span>
                  <input
                    type="number"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    value={aug2_n}
                    id="aug_2"
                    onChange={handlechange}
                  />
                </div>
                {/* inp4 end */}
                <button type="submit" onClick={handlesub}>
                  submit
                </button>
              </form>
            </div>
            {/* NOTE MAY to AUG END */}
            {/* NOTE SEP to DEC  */}

            <div style={{ display: month2 == "sep" ? "" : "none" }}>
              <button type="submit" onClick={handlereset} id="sep2">
                RESET
              </button>
              <form
                className="input_cont"
                style={{ display: month2 == "" ? "none" : "" }}
              >
                {/* inp 1 */}
                <div class="input-group input-group-sm mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-sm">
                    {month2 == "jan" ? "Jan" : ""}
                    {month2 == "may" ? "May" : ""}
                    {month2 == "sep" ? "Sep" : ""}
                  </span>
                  <input
                    type="number"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    value={sep2_n}
                    id="sep_2"
                    onChange={handlechange}
                  />
                </div>
                {/* inp 1 end */}
                {/* inp 2 */}
                <div class="input-group input-group-sm mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-sm">
                    {month2 == "jan" ? "Feb" : ""}
                    {month2 == "may" ? "June" : ""}
                    {month2 == "sep" ? "Oct" : ""}
                  </span>
                  <input
                    type="number"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    id="oct_2"
                    value={oct2_n}
                    onChange={handlechange}
                  />
                </div>
                {/* inp 2 end */}
                {/* inp 3 */}
                <div class="input-group input-group-sm mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-sm">
                    {month2 == "jan" ? "Mar" : ""}
                    {month2 == "may" ? "July" : ""}
                    {month2 == "sep" ? "Nov" : ""}
                  </span>
                  <input
                    type="number"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    id="nov_2"
                    value={nov2_n}
                    onChange={handlechange}
                  />
                </div>
                {/* inp 3 end */}
                {/* inp 4 */}
                <div class="input-group input-group-sm mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-sm">
                    {month2 == "jan" ? "Apr" : ""}
                    {month2 == "may" ? "Aug" : ""}
                    {month2 == "sep" ? "Dec" : ""}
                  </span>
                  <input
                    type="number"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    value={dec2_n}
                    onChange={handlechange}
                    id="dec_2"
                  />
                </div>
                {/* inp4 end */}
                <button type="submit" onClick={handlesub}>
                  submit
                </button>
              </form>
            </div>
            {/* NOTE SEP to DEC END */}
          </div>
        </div>
      </div>
      {/* card 2 end */}

      {/* card 3 start */}
      <div className="year1_card" style={{ display: b3 ? "none" : "flex" }}>
        <div className="card" style={{ width: "18rem" }}>
          {/* <img src="..." class="card-img-top" alt="..."> */}
          <div className="card-body">
            <h5 className="card-title">Year {b3 ? "" : "2018"}</h5>
            <p className="card-text">
              <div class="dropdown">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown button
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a
                      class="dropdown-item"
                      id="jan"
                      href="#"
                      onClick={handle3}
                    >
                      Jan - Apr
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      id="may"
                      href="#"
                      onClick={handle3}
                    >
                      May - Aug
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      id="sep"
                      href="#"
                      onClick={handle3}
                    >
                      Sep - Dec
                    </a>
                  </li>
                </ul>
              </div>
            </p>
            {/* {month3} */}
            {/* NOTE JAN to APR */}
            <div style={{ display: month3 == "jan" ? "" : "none" }}>
              <button type="submit" onClick={handlereset} id="jan3">
                RESET
              </button>
              <form
                className="input_cont"
                style={{ display: month3 == "" ? "none" : "" }}
              >
                {/* inp 1 */}
                <div class="input-group input-group-sm mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-sm">
                    Jan
                  </span>
                  <input
                    type="number"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    value={num3}
                    onChange={handlechange}
                    id="jan_3"
                    // placeholder="0"
                  />
                </div>
                {/* inp 1 end */}
                {/* inp 2 */}
                <div class="input-group input-group-sm mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-sm">
                    Feb
                  </span>
                  <input
                    type="number"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    value={feb3_n}
                    onChange={handlechange}
                    id="feb_3"
                  />
                </div>
                {/* inp 2 end */}
                {/* inp 3 */}
                <div class="input-group input-group-sm mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-sm">
                    Mar
                  </span>
                  <input
                    type="nummber"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    value={mar3_n}
                    onChange={handlechange}
                    id="mar_3"
                  />
                </div>
                {/* inp 3 end */}
                {/* inp 4 */}
                <div class="input-group input-group-sm mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-sm">
                    Apr
                  </span>
                  <input
                    type="number"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    value={apr3_n}
                    onChange={handlechange}
                    id="apr_3"
                  />
                </div>
                {/* inp4 end */}
                <button type="submit" onClick={handlesub}>
                  submit
                </button>
              </form>
            </div>
            {/* NOTE JAN to APR END */}
            {/* NOTE MAY to AUG  */}

            <div style={{ display: month3 == "may" ? "" : "none" }}>
              <button type="submit" onClick={handlereset} id="may3">
                RESET
              </button>
              <form
                className="input_cont"
                style={{ display: month3 == "" ? "none" : "" }}
              >
                {/* inp 1 */}
                <div class="input-group input-group-sm mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-sm">
                    May
                  </span>
                  <input
                    type="number"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    value={may3_n}
                    onChange={handlechange}
                    id="may_3"
                  />
                </div>
                {/* inp 1 end */}
                {/* inp 2 */}
                <div class="input-group input-group-sm mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-sm">
                    Jun
                  </span>
                  <input
                    type="number"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    value={jun3_n}
                    onChange={handlechange}
                    id="jun_3"
                  />
                </div>
                {/* inp 2 end */}
                {/* inp 3 */}
                <div class="input-group input-group-sm mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-sm">
                    Jul
                  </span>
                  <input
                    type="number"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    value={jul3_n}
                    id="jul_3"
                    onChange={handlechange}
                  />
                </div>
                {/* inp 3 end */}
                {/* inp 4 */}
                <div class="input-group input-group-sm mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-sm">
                    Aug
                  </span>
                  <input
                    type="number"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    value={aug3_n}
                    id="aug_3"
                    onChange={handlechange}
                  />
                </div>
                {/* inp4 end */}
                <button type="submit" onClick={handlesub}>
                  submit
                </button>
              </form>
            </div>
            {/* NOTE MAY to AUG END */}
            {/* NOTE SEP to DEC  */}

            <div style={{ display: month3 == "sep" ? "" : "none" }}>
              <button type="submit" onClick={handlereset} id="sep3">
                RESET
              </button>
              <form
                className="input_cont"
                style={{ display: month3 == "" ? "none" : "" }}
              >
                {/* inp 1 */}
                <div class="input-group input-group-sm mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-sm">
                    Sep
                  </span>
                  <input
                    type="number"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    value={sep3_n}
                    id="sep_3"
                    onChange={handlechange}
                  />
                </div>
                {/* inp 1 end */}
                {/* inp 2 */}
                <div class="input-group input-group-sm mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-sm">
                    Oct
                  </span>
                  <input
                    type="number"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    id="oct_3"
                    value={oct3_n}
                    onChange={handlechange}
                  />
                </div>
                {/* inp 2 end */}
                {/* inp 3 */}
                <div class="input-group input-group-sm mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-sm">
                    Nov
                  </span>
                  <input
                    type="number"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    id="nov_3"
                    value={nov3_n}
                    onChange={handlechange}
                  />
                </div>
                {/* inp 3 end */}
                {/* inp 4 */}
                <div class="input-group input-group-sm mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-sm">
                    Dec
                  </span>
                  <input
                    type="number"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    value={dec3_n}
                    onChange={handlechange}
                    id="dec_3"
                  />
                </div>
                {/* inp4 end */}
                <button type="submit" onClick={handlesub}>
                  submit
                </button>
              </form>
            </div>
            {/* NOTE SEP to DEC END */}
          </div>
        </div>
      </div>
      {/* card 3 end */}
    </div>
  );
}

export default Yearcard;
