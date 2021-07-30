import React,{Component, useState} from 'react';
import axios from 'axios';


export default class AddStudent extends Component{
    
    constructor(props){
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
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
    onChangeGender(e){
        this.setState({
            gender: e.target.value
        });
    }
    onChangeAge(e){
        this.setState({
            age: e.target.value
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
            age: this.state.age,
            gender: this.state.gender,
            birthDay: this.state.birthDay
        }
        console.log(obj)

            axios.post("http://localhost:8070/student/add",obj).then(()=>{
            alert("Success Added")
            
            this.setState({
                name: '',
                age: '',
                gender: '',
                birthDay: ''
                })
                this.props.history.push("/studentList");
            })  
    }


    render(){

    return(
            <div className="container">
            <form onSubmit={this.onSubmit}>

            <div class="mb-3">
                <label class="form-label">Student Name</label>
                <input type="text" class="form-control" id="name" placeholder="Enter Name" 
                    value = { this.state.name }
                    onChange={ this.onChangeName }
                    required/>
            </div>
            <div class="mb-3">
                <label class="form-label">Student Age</label>
                <input type="number" class="form-control" id="age" placeholder="Enter Age" 
                    value = { this.state.age }
                    onChange={ this.onChangeAge }
                    required/>
            </div>
            <div class="mb-3">
                <label class="form-label">Gender </label><br/>
                    <select class="form-select" aria-label="Default select example" value = { this.state.gender }
                    onChange={ this.onChangeGender } required >
                        <option selected disabled value="">choose</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>



                
            </div>
            <div class="mb-3">
                <label class="form-label">Bitrh Day</label>
                <input type="date" class="form-control" id="birthDay" placeholder="Enter Gender" 
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