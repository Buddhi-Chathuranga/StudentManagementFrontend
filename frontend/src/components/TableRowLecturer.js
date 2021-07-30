import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class TableRowLecturer extends Component{
    
    onDelete (id){  
        console.log(id)
        
        axios.delete(`http://localhost:8070/lecturer/delete/${id}`).then(()=>{
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
                        {this.props.obj.qualification}
                    </td>
                    <td>
                        {this.props.obj.phone}
                    </td>
                    <td>
                        {this.props.obj.birthDay}
                    </td>
                    <td>
                        <Link to={`/editLecturer/${this.props.obj._id}`} className="btn btn-primary">Edit</Link>
                    </td>
                    <td>
                        <button className="btn btn-primary"  onClick={() => this.onDelete(this.props.obj._id)}>Delete</button>
                    </td>
                </tr>
        );
    }
}

export default TableRowLecturer;