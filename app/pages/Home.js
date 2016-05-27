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
    ProgressBarAndroid,
    RefreshControl,
    Switch,
    Text,
    TouchableOpacity,
    ToolbarAndroid,
    ToastAndroid,
    View,
} from 'react-native';
import {connect} from 'react-redux'

import ImageContainer from './../containers/ImageContainer';
import ListContainer from './../containers/ListContainer';
import WebContainer from './../containers/WebContainer'

var styles = require('../styles');
var ss = Platform.OS == 'ios' ? styles.ios : styles.android;

export default class Home extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
    }

    //componentDidMount() {
    //    this.state.setState({});
    //}

    render() {
        const {navigator} = this.props;
        return (
            <View style={[ss.flex]}>
                <Text
                    style={[{backgroundColor: '#ff6600', color: 'black', height: 100}, ss.font]}
                    onPress={()=>{navigator.push({name:'image', component: ImageContainer, params:{uri:'http://i1.letvimg.com/lc05_iscms/201604/18/21/14/86c81daff3a040de8494a0d4dfcf2d9d.jpg'}})}}>
                    ok! Welcome to Images!
                </Text>

            </View>
        );
    }
}

