import React, { Component } from 'react'
import UserProfile from './FormValidation/UserProfile/UserProfile'
import DemoJSS from './JSS_StyledComponent/DemoJSS/DemoJSS'
import DemoTheme from './JSS_StyledComponent/Themes/DemoTheme'
import ToDoList from './JSS_StyledComponent/BaiTapStyleComponent/ToDoList/ToDoList'
import BaiTap from './BaiTapFormDangKy/BaiTap/BaiTap'
import DemoHookUseCallBack from './Hooks/DemoHookUseCallBack'
import DemoHookUseMemo from './Hooks/DemoHookUseMemo'
import DemoUseRef from './Hooks/DemoUseRef'
import DemoUseReducer from './Hooks/DemoUseReducer'
import ContextProvider from './Hooks/Context/ContextProvider'
import DemoReduxApp from './Hooks/DemoReduxApp'
import DemoUseSpring from './Hooks/ReactSpring/DemoUseSpring'
import Ex2UseSpring from './Hooks/ReactSpring/Ex2UseSpring'
import Ex3UseSprings from './Hooks/ReactSpring/Ex3UseSprings'
import Ex4UseTrail from './Hooks/ReactSpring/Ex4UseTrail'
import Ex5UseTransition from './Hooks/ReactSpring/Ex5UseTransition'
import BaiTapGameBauCua from './BaiTapTongHop/BaiTapGameBauCua/BaiTapGameBauCua'
import BaiTapCuoiKhoa from './BaiTapCuoiKhoa/BaiTapCuoiKhoa'
import { BrowserRouter, Navigate, Route, Routes,useNavigate } from "react-router-dom";
export default class App extends Component {


  render() {
    return (
      <ContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path='todolist' element={<ToDoList/>}></Route>
              <Route path='baitapgamebaucua' element={<BaiTapGameBauCua/>}></Route>
              <Route path='baitapthudo' element={ <BaiTapCuoiKhoa/>}></Route>
            </Routes>
          </BrowserRouter>
          {/* <UserProfile /> */}
          {/* <DemoJSS /> */}
          {/* <DemoTheme /> */}
      
          {/* <BaiTap/> */}
          {/* <DemoHookUseCallBack/> */}
          {/* <DemoHookUseMemo/> */}
          {/* <DemoUseRef/> */}
          {/* <DemoUseReducer/> */}
          {/* <DemoReduxApp/> */}
          {/* <DemoUseSpring/> */}
          {/* <Ex2UseSpring/> */}
          {/* <Ex3UseSprings/> */}
          {/* <Ex4UseTrail/> */}
          {/* <Ex5UseTransition/> */}
          
         
      </ContextProvider>
    )
  }
}
