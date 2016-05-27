"use strict";

import React, {Component} from 'react';
import {
    Alert,
    BackAndroid,
    Navigator,
    Platform,
} from 'react-native';

import Splash from './pages/Splash';

var thisNavigator, isRemoved = true;

export default class App extends Component {

    // 构造
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        //if (isFirstTime) {
        //    Alert.alert('提示', '这是当前版本第一次启动,是否要模拟启动失败?失败将回滚到上一版本', [
        //        {text: '是', onPress: ()=>{throw new Error('模拟启动失败,请重启应用')}},
        //        {text: '否', onPress: ()=>{markSuccess()}},
        //    ]);
        //} else if (isRolledBack) {
        //    Alert.alert('提示', '刚刚更新失败了,版本被回滚.');
        //}

        //this._checkUpdate()
    }

    _goBack() {
        if (thisNavigator && thisNavigator.getCurrentRoutes().length > 1) {
            thisNavigator.pop();
        } else {
            return false;
        }
        return true;
    }

    _renderScene(route, navigator) {
        thisNavigator = navigator;
        let Component = route.component;
        if (route.name === 'WebViewPage') {
            BackAndroid.removeEventListener('hardwareBackPress', this._goBack);
            isRemoved = true;
        } else {
            if (isRemoved) {
                BackAndroid.addEventListener('hardwareBackPress', this._goBack);
            }
        }
        //const { dispatch } = this.props;
        //const action = bindActionCreators(actions, dispatch);
        //
        return <Component navigator={navigator} {...route.params}/>
    };

    render() {
        var sceneConfig = Object.assign({}, Navigator.SceneConfigs.FloatFromRight, {gestures: {pop: null}});

        return (
            <Navigator
                initialRoute={{name: 'splash', component: Splash}}
                configureScene={(route)=>sceneConfig}
                renderScene={this._renderScene.bind(this)}/>
        );
    }
}
