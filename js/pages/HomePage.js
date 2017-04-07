/**
 * Created by Administrator on 2017/4/6.
 */
import React,{Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import PopularPage from './PopularPage';


export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'popular', //默认选中的选项卡
        };
    }

    render() {
        return <View style={styles.container}>
            <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'popular'}
                    title="最热"
                    titleStyle={{color: '#ccc'}}
                    selectedTitleStyle={{color: '#63B8FF'}}
                    renderIcon={() =>
                        <Image style={styles.icon} source={require('../../res/images/ic_popular.png')}/>}
                    renderSelectedIcon={() =>
                        <Image style={[styles.icon,{tintColor:'#63B8FF'}]} source={require('../../res/images/ic_popular.png')}/>}
                    onPress={() => this.setState({selectedTab: 'popular'})}
                >
                    {/* titleStyle 设置未选中时候字体的样式 */}
                    {/*选项卡对应的页面*/}
                    <PopularPage/>
                </TabNavigator.Item>

                <TabNavigator.Item
                    selected={this.state.selectedTab === 'trending'}
                    title="趋势"
                    titleStyle={{color: '#ccc'}}
                    selectedTitleStyle={{color: '#63B8FF'}}
                    renderIcon={() =>
                        <Image style={styles.icon} source={require('../../res/images/ic_trending.png')}/>}
                    renderSelectedIcon={() =>
                        <Image style={[styles.icon,{tintColor:'#63B8FF'}]} source={require('../../res/images/ic_trending.png')}/>}
                    onPress={() => this.setState({selectedTab: 'trending'})}
                >
                    <View style={{backgroundColor:'#0F0',flex:1}}></View>
                </TabNavigator.Item>

                <TabNavigator.Item
                    selected={this.state.selectedTab === 'favorite'}
                    title="收藏"
                    titleStyle={{color: '#ccc'}}
                    selectedTitleStyle={{color: '#63B8FF'}}
                    renderIcon={() =>
                        <Image style={styles.icon} source={require('../../res/images/ic_favorite.png')}/>}
                    renderSelectedIcon={() =>
                        <Image style={[styles.icon,{tintColor:'#63B8FF'}]} source={require('../../res/images/ic_favorite.png')}/>}
                    onPress={() => this.setState({selectedTab: 'favorite'})}
                >
                    <View style={{backgroundColor:'#0F0',flex:1}}></View>
                </TabNavigator.Item>

                <TabNavigator.Item
                    selected={this.state.selectedTab === 'my'}
                    title="我的"
                    titleStyle={{color: '#ccc'}}
                    selectedTitleStyle={{color: '#63B8FF'}}
                    renderIcon={() =>
                        <Image style={styles.icon} source={require('../../res/images/ic_my.png')}/>}
                    renderSelectedIcon={() =>
                        <Image style={[styles.icon,{tintColor:'#63B8FF'}]} source={require('../../res/images/ic_my.png')}/>}
                    onPress={() => this.setState({selectedTab: 'my'})}
                >
                    <View style={{backgroundColor:'#00F',flex:1}}></View>
                </TabNavigator.Item>
            </TabNavigator>
        </View>;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    icon: {
        width: 26,
        height: 26
    }
});
