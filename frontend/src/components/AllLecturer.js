import React ,{ Component } from "react";
import axios from "axios";
import TableRow from "./TableRowLecturer";



export default class AllLecturers extends Component{
constructor(props){
    super(props); 
    this.state = { lecturers: [] };
}

componentDidMount(){
    axios.get('http://localhost:8070/lecturer/')
    .then(response=>{
        this.setState({lecturers : response.data});
    })
    .catch(function(err){
        console.log(err);
    })
}

tabRow(){
    return this.state.lecturers.map(function (object,i){
        return <TableRow obj={object} key={i}/>
    })
}


render(){
   
    return(
        <div >
            <h3 > Lecturer List </h3>
           <table class="table">
               <tbody>
                   <tr>
                        <th >Name</th>
                        <th >Qualificayion</th>
                        <th >Phone</th>
                        <th >Birth Day</th>
                        <th >Action</th>

                   </tr>
                   {this.tabRow()}
               </tbody>
           </table>
        </div>
    )
}

}
