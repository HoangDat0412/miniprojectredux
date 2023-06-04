import React, { Component } from 'react'
import { connect, Connect } from 'react-redux'
 class DanhSach extends Component {

  renderDanhSach = () =>{
    return this.props.listNguoiDung.map((nguoiDung,index) =>{
      return <tr key={index}>
      <td>{nguoiDung.stt}</td>
      <td>{nguoiDung.taiKhoan}</td>
      <td>{nguoiDung.hoTen}</td>
      <td>{nguoiDung.matKhau}</td>
      <td>{nguoiDung.email}</td>
      <td>{nguoiDung.sdt}</td>
      <td>{nguoiDung.loaiNguoiDung}</td>
      <td><button className='btn btn-success'>Chỉnh Sửa</button></td>
      <td><button className='btn btn-danger' onClick={ () => this.props.dispatch({
        type:'xoalist',
        stt: nguoiDung.stt
      })}>Xóa</button></td>
    </tr>
    })

  }
  

  render() {
    return (
      <div>
        <div style={{
          padding:'15px',
          backgroundColor:'#343a40',
          fontSize:'20px',
          color:'white'
        }}>
          Danh Sách Người Dùng 
        </div>

        <table class="table">
          <thead>
            <tr>
              <th>STT</th>
              <th>Tài Khoản</th>
              <th>Họ Tên</th>
              <th>Mật Khẩu</th>
              <th>Email</th>
              <th>Số Điện Thoại</th>
              <th>Loại Người Dùng</th>
              <th>
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
              {this.renderDanhSach()}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = state =>{
  return {
    listNguoiDung : state.BaiTapReducer.listNguoiDung,
  }
}

export default connect(mapStateToProps)(DanhSach)
