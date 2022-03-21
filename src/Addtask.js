import React from "react";
import { useState } from "react";

function Addtask() {
  var [names, setnames] = useState([]);
  let [name, setName] = useState("");
  let [deleteditems, setdeleteditems] = useState([]);
  var addTask = (a) => {
    console.log(a);
    if (name) {
      setnames([...names, name]);
      setName("");
    }
  };
  console.log(deleteditems);
  return (
    <>
      <div className="container bor">
        <div className="row">
          <div className="col-sm-12 ms-5">
            {/* input */}
            <div className="row m-3">
              <div className="col-sm-8">
                <input
                  id="input"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="col-sm-4">
                <button className="btn btn-success" onClick={addTask}>
                  addtask
                </button>
              </div>
            </div>
            {/* output */}
            <div className="row">
              <div className="col-sm-8 d-flex justify-content-center">
                <ul className="list-group list-group-flush">
                  {names.map((val) => {
                    return (
                      <li className="list-group-item">
                        {val}{" "}
                        <span
                          className="fw-bold"
                          onClick={() => {
                            setdeleteditems([...deleteditems, val]);
                            setnames(names.filter((value) => value !== val));
                          }}
                        >
                          X
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Addtask;
{
  /* <input
id="input"
type="text"
value={name}
onChange={(e) => setName(e.target.value)}
className="form-control"
/> */
}

{
  /* <button className="btn btn-success" onClick={addTask}>
addtask
</button> */
}

{
  /* <ul className="list-group list-group-flush">
{names.map((val) => {
  return (
    
            <li className="m-3">{val}</li>
         
            <button
              className="btn btn-danger m-3  btn-sm"
              onClick={() => {
                setdeleteditems([...deleteditems, val]);
                setnames(
                  names.filter((value) => value !== val)
                );
              }}
            >
              X
            </button>
          
  );
})}
</ul> */
}

// d-flex justify-content-center
