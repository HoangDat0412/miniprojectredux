import { useSprings, animated } from "@react-spring/web";
import React from "react";

export default function Ex3UseSprings() {
  let arrOpacity = [
    { opacity: 0.1,color:'pink',content:'FullStack',num:200 },
    { opacity: 0.3,color:'green',content:'BackEnd',num:300 },
    { opacity: 0.7,color:'arange',content:'Cycberlearn',num:400},
    { opacity: 1,color:'purple',content:'Cycbersoft',num:500 },
  ];
  let propsAnimationUseSprings = useSprings(
    arrOpacity.length,
    arrOpacity.map((item, index) => ({
      opacity: item.opacity,
      color: item.color,
      content: item.content,
      num:item.num,
      from: {
         opacity: 0,
         color:'black',
         content:item.content
     },
     config:{
        duration:3000
     }
    }))
  );

  return <div>
    {propsAnimationUseSprings.map((props,index)=>(
        <animated.h1 style={props}>
            {props.content}
        </animated.h1>
    ))}
  </div>;
}
