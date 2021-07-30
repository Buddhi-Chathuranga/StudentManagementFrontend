import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class TableRow extends Component{
    
    onDelete (id){  
        console.log(id)
        
        axios.delete(`http://localhost:8070/student/delete/${id}`).then(()=>{
        alert("Success Deleteed")
        window.location.reload(); 
        })
    }


    render(){
        return(
                <tr >
                    <td>
                        {this.props.obj.name}
                    </td>
                    <td>
                        {this.props.obj.age}
                    </td>
                    <td>
                        {this.props.obj.gender}
                    </td>
                    <td>
                        {this.props.obj.birthDay}
                    </td>
                    <td>
                        <Link to={`/editStudent/${this.props.obj._id}`} className="btn btn-primary">Edit</Link>
                    </td>
                    <td>
                        <button className="btn btn-primary"  onClick={() => this.onDelete(this.props.obj._id)}>Delete</button>
                    </td>
                </tr>
        );
    }
}

export default TableRow;