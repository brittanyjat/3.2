import React, { Component } from 'react';
import Header from '../Header'
import { connect } from 'react-redux';
import { getUserInfo } from '../../ducks/reducer';

class Dashboard extends Component {
    constructor(props){
        super(props);

        this.state = {

        }
    }

    componentDidMount(){
        this.props.getUserInfo()
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <Header />
                <div>Dashboard</div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        user: state.user
    }
};

export default connect(mapStateToProps, {getUserInfo})(Dashboard);
