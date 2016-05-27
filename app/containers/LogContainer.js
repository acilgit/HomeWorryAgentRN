"use strict";

import React from 'react';

import {connect} from 'react-redux';

import ImagePage from '../pages/MePage';

class ImageContainer extends React.Component {
    render() {
        let LogPage = this.props.component;
        return (
            <LogPage {...this.props} />
        )
    }
}

function mapStateToProps(state) {
    const {log} = state;
    return {
        log
    };
}

export default connect(mapStateToProps)(ImageContainer);