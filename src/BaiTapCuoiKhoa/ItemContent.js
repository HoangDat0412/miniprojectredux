import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
export default function ItemContent(props) {

  let {list} = props
  let dispatch = useDispatch()
  return (
    <Fragment>
      
        <div className="container">
          <div className="row">

            {list.map((item,index)=>(
            <div className="col-md-3" key={index}>
            <div className="card text-center">
              <img src={item.imgSrc_jpg} />
              <h4>
                <b>{item.name}</b>
              </h4>
              <button className="btn btn-success" onClick={
                ()=> dispatch({
                  type:"THU_DO",
                  data:{item}
                })
              }>Thử đồ</button>
            </div>
          </div>
            ))}
          </div>
        </div>
      
    </Fragment>
  );
}
