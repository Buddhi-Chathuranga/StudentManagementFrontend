import React ,{ Component } from "react";
import axios from "axios";
import TableRow from "./TableRow";



export default class AllStudents extends Component{
constructor(props){
    super(props);
    this.state = { students: [] };
}

componentDidMount(){
    axios.get('http://localhost:8070/student/')
    .then(response=>{
        this.setState({students : response.data});
    })
    .catch(function(err){
        console.log(err);
    })
}

tabRow(){
    return this.state.students.map(function (object,i){
        return <TableRow obj={object} key={i}/>
    })
}


render(){
   
    return(
        <div >
            <h3 > Student List </h3>
           <table class="table">
               <tbody>
                   <tr>
                        <th >Name</th>
                        <th >Age</th>
                        <th >Gender</th>
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
