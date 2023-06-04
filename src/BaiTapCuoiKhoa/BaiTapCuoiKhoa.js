import React from 'react'
import Header from './Header'
import './style.css';
import NavBT from './nav';
import TabContent from './tabContent';
import ThuDo from './ThuDo';
export default function BaiTapCuoiKhoa() {
    {console.log('BaiTapCuoiKhoa ReRender');}
  return (
    
    <div className='container-fluid'>
        <div className='row'>
            <Header/>
        </div>

        <div className='row'>
            <div className='col-md-8'>
                <NavBT/>
                <TabContent/>
            </div>

            <div className='col-md-4'>
                <ThuDo/>
            </div>

        </div>
    </div>
  )
}
