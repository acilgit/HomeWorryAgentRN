"use strict";

import React, {Component} from 'react';
import {
    Alert,
    AppRegistry,
    BackAndroid,
    Image,
    ListView,
    Navigator,
    Platform,
    StatusBar,
    View,
} from 'react-native';
import {connect} from 'react-redux'

import Main from '../containers/MainContainer';
import Login from '../containers/LogContainer';

var styles = require('../styles');
var ss = Platform.OS == 'ios' ? styles.ios : styles.android;

export default class Splash extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
    }

    componentDidMount() {
        const {navigator} = this.props;
        setTimeout(() => {
            InteractionManager.runAfterInteractions(() => {
                let title = '首页', component = Home;
                Storage.get('isInit').then((isInit) => {
                    if (!isInit) {
                        Storage.save('isInit', true);
                        init = true;
                        component = Login;
                        title = '登录'
                    }
                    navigator.resetTo({
                        component: component,
                        name: title,
                    });
                });
            });
        }, 2000);
    }

    render() {
        return (
            <View style={[{flex:1}]}>
                <StatusBar hidden={true}/>
                <Image
                    style={[{flex: 1}, ss.h, ss.w]}
                    source={require('../src/img/welcome_pic.png')}
                />
            </View>
        );
    }
}

