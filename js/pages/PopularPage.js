/**
 * Created by Administrator on 2017/4/6.
 */
import React,{Component} from 'react';
import {View,StyleSheet} from 'react-native';
import NavigationBar from '../component/NavigationBar'

export default class PopularPage extends Component{
    render(){
        return <View style={styles.container}>
            <NavigationBar/>
            </View>
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1
    }

});
