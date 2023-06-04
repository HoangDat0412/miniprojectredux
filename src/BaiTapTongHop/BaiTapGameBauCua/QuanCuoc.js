import { useSpring, animated } from "@react-spring/web";
import React from "react";
import { useDispatch } from "react-redux";

export default function QuanCuoc(props) {
  const dispatch = useDispatch();

  const propsUseSpring = useSpring({
    from: { scale: 0 },
    to: { scale: 1 },
    // config:{
    //     duration:5000
    // }
  });

  const { quanCuoc } = props;

  return (
    <div className="mt-3 ">
      <img src={quanCuoc.hinhAnh} style={{ width: 250 }} />

      <div
        className="bg-success mt-2 pb-2 text-center"
        style={{ borderRadius: "10px", width: 250 }}
      >
        <animated.button
          onClick={() => {
            dispatch({
              type: "DAT_CUOC_BAU_CUA",
              quanCuoc,
              tangGiam: true,
            });
          }}
          className="btn btn-danger mr-3"
          style={{transform:propsUseSpring.scale.interpolate(scale => `scale(${scale})`)}}
        >
          <i className="fa fa-plus"></i>
        </animated.button>

        <span className="mt-2" style={{ color: "yellow", fontSize: 25 }}>
          {quanCuoc.diemCuoc}
        </span>
        <button
          onClick={() => {
            dispatch({
              type: "DAT_CUOC_BAU_CUA",
              quanCuoc,
              tangGiam: false,
            });
          }}
          className="btn btn-danger ml-3"
        >
          -
        </button>
      </div>
    </div>
  );
}
