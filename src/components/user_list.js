import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions'

class UserList extends Component { 
    componentWillMount() {
        this.props.fetchUsers();
    }


    render() {
        return (
            <div className='user-list'>
                {this.props.users.quote}
            </div>
        );
    }
}

function mapStateToProp(state) {
    return { users: state.users};
}

export default connect(mapStateToProp, actions)(UserList)