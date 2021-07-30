import React,{Component, useState} from 'react';
import axios from 'axios';


export default class AddLecturer extends Component{
    
    constructor(props){
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeQualification = this.onChangeQualification.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeBirthDay = this.onChangeBirthDay.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            age: '',
            gender: '',
            birthDay: ''
        }
    }
    onChangeName(e){
        this.setState({
            name: e.target.value
        });
    }
    onChangeQualification(e){
        this.setState({
            qualification: e.target.value
        });
    }
    onChangePhone(e){
        this.setState({
            phone: e.target.value
        });
    }
    onChangeBirthDay(e){
        this.setState({
            birthDay: e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();
        const obj = {
            name: this.state.name,
            qualification: this.state.qualification,
            phone: this.state.phone,
            birthDay: this.state.birthDay
        }
        console.log(obj)

            axios.post("http://localhost:8070/lecturer/add",obj).then(()=>{
            alert("Success Added")
            
            this.setState({
                name: '',
                qualification: '',
                phone: '',
                birthDay: ''
                })
                this.props.history.push("/lecturerList");  
            })  
    }


    render(){

    return(
            <div className="container">
            <form onSubmit={this.onSubmit}>

            <div class="mb-3">
                <label class="form-label">Lecturer Name</label>
                <input type="text" class="form-control" id="name" placeholder="Enter Name" 
                    value = { this.state.name }
                    onChange={ this.onChangeName }
                    required/>
            </div>
            <div class="mb-3">
                <label class="form-label">Qualification</label>
                <input type="text" class="form-control" id="qualification" placeholder="Enter Qualification" 
                    value = { this.state.qualification }
                    onChange={ this.onChangeQualification }
                    required/>
            </div>
            <div class="mb-3">
                <label class="form-label">Phone</label>
                <input type="number" class="form-control" id="phone" placeholder="Enter Phone" 
                    value = { this.state.phone }
                    onChange={ this.onChangePhone }
                    required/>
            </div>
            <div class="mb-3">
                <label class="form-label">Lecturer Bitrh Day</label>
                <input type="date" class="form-control" id="birthDay"   
                    value = { this.state.birthDay }
                    onChange={ this.onChangeBirthDay }
                    required/>
            </div>
            
            <button type="submit" class="btn btn-primary" >Submit</button>
            </form>
            </div>
        )
    }
}