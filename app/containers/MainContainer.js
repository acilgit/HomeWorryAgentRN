"use strict";

import React from 'react';

import {connect} from 'react-redux';

import MePage from '../pages/MePage';
import OrderPage from '../pages/OrderPage';
import ChatPage from '../pages/ChatPage';

class MainContainer extends React.Component {
    render() {
        return (
            <ImagePage {...this.props} />
        )
    }
}

function mapStateToProps(state) {
    const {main} = state;
    return {
        main
    };
}

export default connect(mapStateToProps)(MainContainer);