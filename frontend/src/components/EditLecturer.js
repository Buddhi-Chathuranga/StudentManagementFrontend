import React ,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class Edit extends Component{
    constructor(props){
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeQualification = this.onChangeQualification.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeBirthDay = this.onChangeBirthDay.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            qualification: '',
            phone: '',
            birthDay: ''
        }
    }

    componentDidMount(){
        const id= this.props.match.params.id;
        axios.get(`http://localhost:8070/lecturer/get/${id}`)
        .then(response=>{
            console.log(response.data.name);

            
                this.setState({
                    name: response.data.name,
                    qualification: response.data.qualification,
                    phone: response.data.phone,
                    birthDay: response.data.birthDay
                })
            
        })
        .catch(function(err){
            console.log(err);
        })
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
        const id = this.props.match.params.id;
        const obj = {
            name: this.state.name,
            qualification: this.state.qualification,
            phone: this.state.phone,
            birthDay: this.state.birthDay
        }
        console.log(id)

         axios.put(`http://localhost:8070/lecturer/update/${id}`,obj).then(()=>{
         
        this.setState({
            name: '',
            qualification: '',
            phone: '',
            birthDay: ''
            })
            this.props.history.push("/lecturerList");
            
        });
        
        
    
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
                    />
            </div>
            <div class="mb-3">
                <label class="form-label">Qualification</label>
                <input type="text" class="form-control" id="qualification" placeholder="Enter Qualification" 
                    value = { this.state.qualification }
                    onChange={ this.onChangeQualification }
                    />
            </div>
            <div class="mb-3">
                <label class="form-label">Qualification</label>
                <input type="number" class="form-control" id="phone" placeholder="Enter Phone" 
                    value = { this.state.phone }
                    onChange={ this.onChangePhone }
                    />
            </div>
            <div class="mb-3">
                <label class="form-label">Bitrh Day</label>
                <input type="date" class="form-control" id="birthDay" 
                    value = { this.state.birthDay }
                    onChange={ this.onChangeBirthDay }
                    />
            </div>
            
            <button type="submit" class="btn btn-primary" >Submit</button>
            </form>
            </div>
        )
    }
}