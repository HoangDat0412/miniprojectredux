import React, { Component } from 'react'
import './UserProfile.css'


export default class UserProfile extends Component {



    state = {
      values : {
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        passWord: '',
        passWordConfirm: ''
      },
      errors : {
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        passWord: '',
        passWordConfirm: ''
      }
    }

    handleChangeValue = (event) => {
        let { name, value,type } = event.target;

        let newValue ={
          ...this.state.values,
          [name]: value
        };
        let newErrors = {
          ...this.state.errors
        };

        if(value.trim() === ''){
            newErrors[name] = name + " is required"
        }else{
          newErrors[name] = ''
        }

        if(type === 'email'){
          const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
          if(!regexEmail.test(value)){
            newErrors[name] = name + " is invalid"
          }else{
            newErrors[name] = ""
          }
        }

        if(name === 'passWordConfirm'){
          if(value === newValue['passWord']){
            newErrors[name] ="";
          }else{
            newErrors[name] =" nhập lại mật khẩu";
          }
        }


        this.setState({
          values: newValue,
          errors: newErrors
        })




    }

    handleSubmit = (event) =>{
      event.preventDefault();
      // xét điều kiện khi submit 
      let{values,errors} = this.state;
      let valid = true;
      for(let key in values){
        if(values[key]===''){
          valid = false
        }
      }
      for(let key in errors){
        if(values[key] !== ""){
          valid = false
        }
      }

      if(!valid){
        alert('dữ liệu chưa hợp lệ')
        return;

      }

      alert("thành công")

    }

    render() {
        return (
            <div className="container-fluid" style={{ backgroundColor: '#EEEEEE', display: 'flex', justifyContent: 'center' }}>
                <form onSubmit={this.handleSubmit} style={{ fontSize: 'font-family: "Google Sans", "Noto Sans Myanmar UI", arial, sans-serif', width: 600 }} className=" bg-white p-5 m-5" >
                    <h1 className="text-center mt-0 mb-5">User Profile</h1>
                    <div className="row">
                        <div className="col-6">
                            <div className="group">
                                <input type="text" name="firstName" required onChange={this.handleChangeValue} value={this.state.values.firstName}/>
                                <span className="highlight" />
                                <span className="bar" />
                                <label>firstName</label>
                                <span className='text text-danger'>{this.state.errors.firstName}</span>
                            </div>

                        </div>
                        <div className="col-6">
                            <div className="group">
                                <input type="text" name="lastName" required onChange={this.handleChangeValue} value={this.state.values.lastName} />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>lastName</label>
                                <span className='text text-danger'>{this.state.errors.lastName}</span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="group">
                                <input type="text" name="userName" required onChange={this.handleChangeValue} value={this.state.values.userName} />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>userName</label>
                                <span className='text text-danger'>{this.state.errors.userName}</span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="group">
                                <input type="email" name="email" required onChange={this.handleChangeValue} value={this.state.values.email}/>
                                <span className="highlight" />
                                <span className="bar" />
                                <label>email</label>
                                <span className='text text-danger'>{this.state.errors.email}</span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="group">
                                <input name="passWord" type="password" required onChange={this.handleChangeValue} value={this.state.values.passWord}/>
                                <span className="highlight" />
                                <span className="bar" />
                                <label>password</label>
                                <span className='text text-danger'>{this.state.errors.passWord}</span>
                            </div>

                        </div>
                        <div className="col-6">
                            <div className="group">
                                <input name="passWordConfirm" type="password" required onChange={this.handleChangeValue} value={this.state.values.passWordConfirm}/>
                                <span className="highlight" />
                                <span className="bar" />
                                <label>passwordConfirm</label>
                                <span className='text text-danger'>{this.state.errors.passWordConfirm}</span>
                            </div>
                        </div>

                    </div>
                    <div className="row">
                        <button className="btn text-white bg-dark w-100 col-12" style={{ fontSize: 25 }}>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}
