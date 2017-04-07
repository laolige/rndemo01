/**
 * Created by Administrator on 2017/4/1.
 */
import React,{Component} from 'react';
import {View,ScrollView,Image,StyleSheet,Text} from 'react-native';
var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
class BannerView extends Component{
    constructor(props){
        super(props);
        this.state = {index:-1};
    }
    handleScrollPage=(e)=>{
        var offSetX = e.nativeEvent.contentOffset.x;
        this.setState({index:offSetX/ScreenWidth});
        console.log("aaa"+offSetX);
    }


    getAllPoints=()=>{
        var points = [1,2,3,4];
       return  points.map((item,i)=>{
           console.log("index:"+this.state.index);
           if(this.state.index==i){
               return   <Text key={"points"+i} style={[styles.textStyle,{color:'#f0f'}]} >&bull;</Text>;
           }
           return   <Text key={"points"+i} style={styles.textStyle}>&bull;</Text>;
        });

    };
    startTimer=()=>{
        this.timer= setInterval(()=>{
            var cindex = this.state.index+1>3?0:this.state.index+1;
            this.setState({index:cindex});
            this.refs.banner.scrollTo({x:cindex*ScreenWidth,y:0,animated:true});
            console.log("timerS:"+cindex);
        },2000);
    }
    stopTimer=()=>{
        clearInterval(this.timer);
    }
    render(){
        return <View>
            <ScrollView ref="banner"
                        onScrollBeginDrag={this.stopTimer.bind(this)}
                        onScrollEndDrag = {this.startTimer.bind(this)}
                onMomentumScrollEnd ={this.handleScrollPage}
                style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled ={true} >
                <Image source={require('./images/bg1.jpg')} style={styles.imageStyle} />
                <Image source={require('./images/bg2.jpg')} style={styles.imageStyle}/>
                <Image source={require('./images/bg3.jpg')} style={styles.imageStyle}/>
                <Image source={require('./images/bg4.jpg')} style={styles.imageStyle}/>

            </ScrollView>
            <View style={styles.pointLine}>
                {this.getAllPoints()}
            </View>
            </View>;
    };
    componentDidMount(){
        this.startTimer();
    }


}
var styles= StyleSheet.create({
    container:{
        flexDirection:'row',
        height:200,

    },
    imageStyle:{
      width:ScreenWidth,
        height:200
    },
    pointLine:{
        width:ScreenWidth,
        bottom:0,
        position:'absolute',
        height:30,
        backgroundColor:'#cccc',
        flexDirection:'row',
        justifyContent:'center'
    },
    textStyle:{
        fontSize :25,
        color:'#fff',
    }


});

module.exports = BannerView;