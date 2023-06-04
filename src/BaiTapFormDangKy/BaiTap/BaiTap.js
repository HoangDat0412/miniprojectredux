import React, { Component } from 'react'
import DanhSach from './DanhSach'
import FormDangKy from './FormDangKy'


export default class BaiTap extends Component {
  render() {
    return (
      <div className='container'>
        <FormDangKy/>
        <DanhSach/>
      </div>
    )
  }
}
