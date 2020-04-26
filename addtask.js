import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList} from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types';
import { faUserEdit,faTrash} from '@fortawesome/free-solid-svg-icons'

class Addtask extends Component{

    constructor(props){
        super(props);
        this.state={
            data  :[{taskname:""}]
            
        }

    }

    onSubmit = event => {
        event.preventDefault();
        const taskname = this.taskname.value;
        
        const info = {taskname: taskname};
        const data = this.state.data;
        data.push(info);
        this.setState({
          data: data
        });

        
       };

    handleEdit = taskname =>{

        
        
        const  fetcheddata = taskname
        const newdata = prompt('Add a task instead of '+ fetcheddata+' (Note : Clicking on cancel will delete the task "'+ fetcheddata+ '" )');
        console.log(prompt.value)
        const info = {taskname: newdata};
        var data = this.state.data;
        data.push(info);
        data = this.state.data.filter(item => item.taskname !== taskname);
        this.setState({
            data: data
          });
       }
       
    handleDelete = taskname => {
       
        const data = this.state.data.filter(item => item.taskname !== taskname);
        this.setState({ data: data });
      
  };


  refreshPage() {
    console.log("Clicked");
    window.location.reload();
  }

 


    render(){

        
            return(
                <div>

                
            <div id="app-heading">
                TO-DO LIST
            </div>
            <div className="form-container" >
                <form onSubmit={this.onSubmit}>
                    <div>
                        <FontAwesomeIcon id="fastyle"  icon={faList} />

                        <input id="inputstyle" type="text" placeholder=" Add your task"
                        ref={input => this.taskname = input} value={this.state.taskname}>

                        </input>
                    </div>
                    <button type="submit" class="btn btn-primary" id="buttonstyle">ADD ITEM</button>
                </form>

                
                <div className="row justify-content-center">
                {
                    this.state.data.map(
                    (info,index) => <Result key={index} info={info} onDelete={this.handleDelete} onEdit={this.handleEdit}/>
                    )
                }
                </div> 
               
                <button id="clearstyle" onClick = {this.refreshPage}>
                    CLEAR LIST 
                </button>

                
            </div>
            </div>
            
            )
        
    }
    
}



class Result extends Addtask{
   
    

    render(){
        const {taskname}=this.props.info;
        
        if(taskname){
            return(
            <div class="list-container">
            <div id="taskstyle">
                 {taskname}
            </div>
            <div id="edstyle">
                <div id="faeditstyle"> 
                    <FontAwesomeIcon  icon={faUserEdit} onClick={()=>this.props.onEdit(taskname)}  />
                </div>
                <div id="fadeletestyle">
                    <FontAwesomeIcon  icon={faTrash} onClick={()=>this.props.onDelete(taskname)} />
                </div>
            </div> 
            </div>
               
            )
        }
        else{
            return(
             <div/>
            )
    }
}

}

Addtask.propTypes={
    taskname : PropTypes.string.isRequired
}


export default Addtask;