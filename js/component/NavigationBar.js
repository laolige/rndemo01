/**
 * Created by Administrator on 2017/4/6.
 */
import React, {Component} from 'react';
import {View, Text, StyleSheet,TouchableOpacity,Image} from 'react-native';
var Dimensions = require("Dimensions");
var ScreenWidth = Dimensions.get('window').width;
export  default class NavigationBar extends Component {
    render() {
        return <View style={styles.navWrapper}>
                <View style={styles.centerTvWrapper}>
                    <Text style={styles.centerTV}>热门-哈哈哈</Text>
                 </View>
            <TouchableOpacity
                activeOpacity={0.7}>
                <Image source={require('../../res/images/ic_search_white_48pt.png')} style={styles.navBtn}/>
            </TouchableOpacity>

            <TouchableOpacity
                activeOpacity={0.7}>
                <Image source={require('../../res/images/ic_more_vert_white_48pt.png')} style={styles.navBtn}/>
            </TouchableOpacity>
        </View>;
    }
}
const styles = StyleSheet.create({
    navWrapper: {
        backgroundColor: "#f0f",
        flexDirection: 'row',
        height: 30,
        justifyContent:'flex-end',
        alignItems:'center'
    },
    centerTvWrapper: {
        width: ScreenWidth,
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'center',
        height: 30,
        alignItems: 'center'
    },
    navBtn: {
        height:26,
        width:26
    }
});
