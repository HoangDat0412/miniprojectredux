import { submit_action } from "../types/BaiTapType"

const initialState = {
    listNguoiDung :[
    ]
}

export default (state = initialState, action) => {
  switch (action.type) {

  case submit_action:{
    // action.listNd.stt = a +1;

    let newlist = [...state.listNguoiDung];
    newlist.push(action.listNd)
    

    console.log('list sau khi thêm',state.listNguoiDung)
    
      return { ...state,listNguoiDung:newlist }
   
  }

  case 'xoalist':{
    let newList = state.listNguoiDung;
    newList = newList.filter(item => item.stt !== action.stt)
    state.listNguoiDung = [...newList]
    return {...state}
  }


  default:
    return {...state}
  }
}
