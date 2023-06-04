import React, { Component } from "react";
import { submitAction } from "../../redux/actions/BaiTapAction";
import './UserProfile.css'
import { connect, Connect } from "react-redux";
class FormDangKy extends Component {
    state = {
        listNguoiDung:{
          stt:0,
          taiKhoan:'',
          hoTen:"",
          matKhau:'',
          email:'',
          sdt:'',
          loaiNguoiDung:""
        },
        listErr:{
            stt:'',
            taiKhoan:'',
            hoTen:"",
            matKhau:'',
            email:'',
            sdt:'',
            loaiNguoiDung:""
        }
    }
  

    handleChangeValue = (e) =>{

        let {name,value,type} = e.target;
        let newListNguoiDung ={
            ...this.state.listNguoiDung,
            [name] : value
        }
        let newListErr = {
            ...this.state.listErr
        };

        if(value.trim() ===''){
            newListErr[name] = name + ' is required'
        }else{
            newListErr[name] = ''
        }

        if(type === "sdt"){
            
            const regexSdt = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}/;
            if(!regexSdt.test(value)){
                newListErr[name] = name + ' không hợp lệ'
            }else{
                newListErr[name] =''
            }
        }

        if(type === 'email'){
            const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            if(!regexEmail.test(value)){
                newListErr[name] = name + ' không hợp lệ'
            }else{
              newListErr[name] = ""
            }
          }
        

        this.setState({
            ...this.state,
            listNguoiDung: newListNguoiDung,
            listErr: newListErr
        })
    }

    handleSubmit = (newNd)=>{
        
        let valid = true;
        let errr = this.state.listErr
        
        for( let  key in errr){
            if(errr[key] !==""){
                valid = false
            }
        }
        
        console.log('submit',valid,newNd)
        if(valid){
           this.props.dispatch(submitAction(newNd))
        }         

    }

  render() {
    return (
      <div>
        <div className="Container">
        <form  style={{ fontSize: 'font-family: "Google Sans", "Noto Sans Myanmar UI", arial, sans-serif', width: '100%' }} className=" bg-white p-5 m-5" >
                    <h1 className="text-center mt-0 mb-5">Form Đăng Ký</h1>
                    <div className="row">
                        <div className="col-6">
                            <div className="group">
                                <input  type="taiKhoan" name="taiKhoan" onChange={this.handleChangeValue} value={this.state.listNguoiDung.taiKhoan} required />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>Tài Khoản</label>
                                <span className='text text-danger'>{this.state.listErr.taiKhoan}</span>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="group">
                                <input type="hoTen" name="hoTen" onChange={this.handleChangeValue}  value={this.state.listNguoiDung.hoTen} required />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>Họ Tên</label>
                                <span className='text text-danger'>{this.state.listErr.hoTen}</span>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-6">
                            <div className="group">
                                <input name="matKhau" type="password" onChange={this.handleChangeValue}  value={this.state.listNguoiDung.matKhau} required />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>Mật Khẩu</label>
                                <span className='text text-danger'>{this.state.listErr.matKhau}</span>
                            </div>

                        </div>
                        <div className="col-6">
                            <div className="group">
                                <input name="sdt" type="sdt" onChange={this.handleChangeValue}  value={this.state.listNguoiDung.sdt} required />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>Số Điện Thoại</label>
                                <span className='text text-danger'>{this.state.listErr.sdt}</span>
                            </div>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-6">
                        <div className="group">
                                <input name="email" type="email" onChange={this.handleChangeValue}  value={this.state.listNguoiDung.email} required />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>Email</label>
                                <span className='text text-danger'>{this.state.listErr.email}</span>
                            </div>

                        </div>
                        <div className="col-6">
                              <span style={{
                                display:"block"
                              }}>Mã người dùng</span>
                              <select 
                                value={this.state.listNguoiDung.loaiNguoiDung}
                              onChange={ (e) => { this.setState({
                                listNguoiDung:{...this.state.listNguoiDung, loaiNguoiDung:e.target.value}
                              })}}>
                                <option value='khách Hàng'>Khách Hàng</option>
                                <option value= 'Cộng sự'>Cộng sự</option>
                              </select>
                        </div>

                    </div>
                    <div className="row">
                        
                        <button onClick={ () => {

                            this.props.dispatch(submitAction(this.state.listNguoiDung))
                        }} className="btn text-white bg-success mr-2" >Submit</button>
                        
                        <button className="btn text-white bg-dark" >Cập Nhật</button>
                    </div>
                </form>
                

        </div>
      </div>
    );
  }



}



export default connect(null)(FormDangKy)
