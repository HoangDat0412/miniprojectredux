import React,{useState,useCallback} from 'react'
import ChildUseCallBack from './ChildUseCallBack'

export default function DemoHookUseCallBack(props) {

    let [like,setLike] = useState(0);
    const renderNotify = () => {
        return ` Bạn đã thả ${like} ♥ !`
    }
    let callBackRenderNotify = useCallback(
       renderNotify,
      [like],
    )
    

  return (
    <div className='m-5'>
        Like : {like} ♥
        <br></br>
        <span style={{
            cursor:'pointer',
            color:'red',
            fontSize:'25px'
        }} onClick={() => setLike(like+1)}>♥</span>

        

        <br/>
        <br/>


        <ChildUseCallBack renderNotify={callBackRenderNotify}/>
    </div>
  )
}
