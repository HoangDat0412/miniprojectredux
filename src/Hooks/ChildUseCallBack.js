import React,{memo} from 'react'

function ChildUseCallBack(props) {

    console.log('child re render')
    let title = 'cyberlearn'
    let object = {id:1,name:'khải'};

  return (
    <div>
        <small>{props.renderNotify()}</small>
        <br/>
        <textarea></textarea>
        <br></br>
        <button className='btn btn-success'>Gửi</button>
    </div>
  )
}

export default memo(ChildUseCallBack)
