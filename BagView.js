/**
 * Created by Administrator on 2017/4/1.
 */
import React,{Component} from 'react';
import {Text,Image,View,StyleSheet} from 'react-native';
var Dimensions = require('Dimensions');
var ScreenWidth =Dimensions.get('window').width;
var bowWidth = ScreenWidth/3;
var JsonData = require('./test.json');
class BagView extends Component{
    getAllItem = ()=>{
       return JsonData.data.map((item,i)=>{
           return <View key={'key'+i} style={styles.wrapperStyle}>
               <Image source={require('./images/shuangjianbao.png')} style={styles.imageStyle} />
               <Text>{item.title}</Text>
           </View>
        });
    };
    render(){
        return <View style={styles.container}>
            {this.getAllItem()}
        </View>
    }
}
var styles = StyleSheet.create({
    container:{//最外层样式
        flexDirection:'row',
        flexWrap:'wrap'//排不下就换行

    },
    wrapperStyle:{//包裹每一个item的容器
        flexDirection:'column',
        alignItems:'center',//交叉轴居中
        width:bowWidth,
        height:100
    },
    imageStyle:{
        width:80,
        height:80
    }


});
module.exports=BagView;
