import React,{useState,useMemo} from 'react'
import ChildUseMemo from './ChildUseMemo';

export default function DemoHookUseMemo(props) {
    let [like,setLike] = useState(1);
    let cart = [
        {id:1,name:'iphone',price:1000},
        {id:2,name:'samsung',price:900},
        {id:3,name:'xiaomi',price:800}
    ];
    const cartMemo = useMemo(() => cart, [])

  return (
    <div>
        Like : {like} ♥
        <br></br>
        <span style={{
            cursor:'pointer',
            color:'red',
            fontSize:'25px'
        }} onClick={() => setLike(like+1)}>♥</span>
        <br/>
        <br/>
        < ChildUseMemo cart={cartMemo}></ChildUseMemo>
    </div>
  )
}
