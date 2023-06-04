import React from "react";
import { Fragment } from "react";
import Data from "../Data/Data.json";

export default function NavBT() {
  {console.log('NavBar ReRender');}
  let active = false
  return (
    <Fragment>
      
      <ul className="nav nav-pills">
        {Data.navPills.map((item, index) => {
          if(item.type === 'topclothes'){
            active ='active'
          }else{
            active=''
          }
          return (
            <li className="nav-item" key={index}>
              <a
                className={"nav-link btn-default " + active}
                data-toggle="pill"
                href={'#'+ item.tabName}
              >
                {item.showName}
              </a>
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
}
