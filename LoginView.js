/**
 * Created by Administrator on 2017/4/1.
 */
import React,{Component} from 'react';
import {Text,Image,StyleSheet,TextInput,View,TouchableOpacity} from 'react-native';
var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
class LoginView extends Component{
    handlePress=()=>{

        };
    render(){
        return <View style={styles.container}>
            <Image source={require('./images/icon.png') } style={styles.imageStyle} />
               <View style={styles.wrapStyle}>
                   <TextInput placeholder="输入QQ号码" style={styles.inputStyle} ></TextInput>
               </View>
                <View style={styles.wrapStyle}>
                <TextInput placeholder="输入密码" style={styles.inputStyle} keyboardType="numeric" secureTextEntry={true}></TextInput>
                </View>
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={this.handlePress}>
                <View style={styles.textWrapperStyle}>
                    <Text style={{color:'#fff',flex:1,textAlign:'center',backgroundColor:'#f0f'}}>登录</Text>
                </View>
            </TouchableOpacity>
            </View>;
    }
}
var styles = StyleSheet.create({
    container:{
       alignItems:'center'
    },
    wrapStyle:{
      flexDirection:'row'
    },
    inputStyle:{
        flex:1,
        marginLeft:30,
        marginRight:30,
        marginTop:10
    },
    pwdInputStyle:{

    },
    imageStyle:{
        width:80,
        height:80,
        borderRadius:40,
        marginTop:50
    },
    textWrapperStyle:{
        flexDirection:'row',//textAlign只能让text在水平居中，text没有指定高度，他充满父容器的主轴一样，所以高度跟父容器一样高
                                //所以将主轴设为水平，则text的高度就是自己的内容高度
        height:30,
        backgroundColor:'#87CEFA',
        width:ScreenWidth-60,
        marginTop:30,
        alignItems:'center'
    }
});
module.exports=LoginView;
