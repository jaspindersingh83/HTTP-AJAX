import React,{ Component } from 'react';
import { addFriends } from '../actions';
import {connect} from 'react-redux'


class Form extends Component {
    constructor(){
        super();
        this.state = {
            newFriend:{}
        }
    }
    handleNameInput=(event) =>{
        this.setState({newFriend:{name:event.target.value}});
    }
    handleAgeInput=(event) =>{
        this.setState({newFriend:{
            name:this.state.newFriend.name,
            age:event.target.value
        }});
    }
    handleEmailInput=(event) =>{
        this.setState({newFriend:{
            name:this.state.newFriend.name,
            age:this.state.newFriend.age,
            email:event.target.value
        }});
    }
    addnewFriend = (event) => {
        event.preventDefault();
        this.props.addFriends(this.state.newFriend);
        this.setState({
            newFriend:{
                name:'',
                age:'',
                email:'',
            }
        })
    }
    render () {
        return (
            <div>
                    <input type='text' placeholder="Enter Name" onChange={this.handleNameInput} value={this.state.newFriend.name}/>
                    <input type='value' placeholder="Enter Age" onChange={this.handleAgeInput} value={this.state.newFriend.age}/>
                    <input type='text' placeholder="Enter email" onChange={this.handleEmailInput} value={this.state.newFriend.email}/>
                <button onClick ={this.addnewFriend} > Submit </button>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
    };
};


export default connect(mapStateToProps, { addFriends })(Form);