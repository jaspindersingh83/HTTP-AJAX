import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFriends,deleteFriend } from '../actions';
import Form from './Form'

class FriendList extends Component {
    componentDidMount() {
        this.props.getFriends();
    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.friends.map((friend, i) => {
                        return (
                            <li key={i}>
                                <p>{`Friend ${i+1}`}</p>
                                <button onClick={this.props.deleteFriend}> Delete </button>
                                <p>{`Name: ${friend.name}`}</p>
                                <p>{`Age: ${friend.age}`}</p>
                                <p>{`Email: ${friend.email}`}</p>
                            </li>
                        );
                    })}
                </ul>
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