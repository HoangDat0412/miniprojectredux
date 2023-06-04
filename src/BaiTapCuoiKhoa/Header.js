import React from "react";
import { Fragment } from "react";
export default function Header() {
  {console.log("Header ReRender");}
  return (
    <Fragment>
      <div className="col-sm-12">
        <div className="card">

          <div className="card-body">
            <h4 className="card-title text-center">
              
              Virtual Dressing Room
            </h4>
          </div>
        </div>
        <hr />
      </div>
    </Fragment>
  );
}
