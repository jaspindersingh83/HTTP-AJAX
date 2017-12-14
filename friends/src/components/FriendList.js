import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFriends,deleteFriend } from '../actions';
import Form from './Form';
import './FriendList.css'

class FriendList extends Component {
    componentDidMount() {
        this.props.getFriends();
    }

    render() {
        return (
            <div className='App'>
                    {this.props.friends.map((friend, i) => {
                        return (
                            <div className='Cardcontainer' key={i}>
                                <div className='Cardcontainer__header'>{`Friend ${i+1}`}</div>
                                <div className='Cardcontainer__body'>
                                    <button onClick={this.props.deleteFriend}> Delete Friend </button>
                                    <p>{`Name: ${friend.name}`}</p>
                                    <p>{`Age: ${friend.age}`}</p>
                                    <p>{`Email: ${friend.email}`}</p>
                                </div>
                            </div>
                        );
                    })}
                <Form />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        friends: state.friends
    };
};

export default connect(mapStateToProps, { getFriends, deleteFriend})(FriendList);