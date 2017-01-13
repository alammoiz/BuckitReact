/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TabBarIOS,
    NavigatorIOS,
    TouchableHighlight
} from 'react-native';
import Drawer from 'react-native-drawer'
var Home = require('./home.ios');
var Messages = require('./messages.ios');
var Welcome = require('./welcome.ios');
var Spend = require('./spend.ios.js');
var Notice = require('./notice.ios');
var SlidingMenu = require('./slidingMenu.ios.js');
var NavigationBar = require('react-native-navbar');
class AwesomeProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'welcome'
        };
    }

    closeControlPanel = () => {
        this.drawer.close()
    };
    openControlPanel = () => {
        this.drawer.open()
    };


    rightButtonConfig = {
    title: 'Next',
    handler: function onNext() {
        alert('Next!');
    }
    };
    leftButtonConfig = {
        title: 'Previous',
        handler: function onNext() {
            alert('Previous!');
        }
    };
    titleConfig = {
    title: 'Buckit',
    };
    render() {
        return (
            <Drawer
                ref={(ref) => this._drawer = ref}
                type="overlay"
                content={<SlidingMenu />}
                tapToClose={true}
                openDrawerOffset={0.2}
                panCloseMask={0.2}
                closedDrawerOffset={-3}
                open={true}
                styles={styles.drawerStyles}>

                <View style={styles.navigationBar}>
                    {/*<NavigationBar
                        ref={(ref) => this._navigator = ref}
                        styles={styles.navigationBar}
                        title={this.titleConfig}
                        rightButton={this.rightButtonConfig}
                        leftButton={this.leftButtonConfig}
                        tintColor={'#42bae7'}

                        />*/}
                        <CustomNavBar/>
                </View>
                <View style={styles.mainBody}>
            <TabBarIOS selectedTab={this.state.selectedTab}>
                <TabBarIOS.Item
                selected={this.state.selectedTab === 'welcome'}
                icon={require('./images/tab/tabmain.png')}
                onPress={() => {
              this.setState({
                  selectedTab: 'welcome',
              });
          }}>
                <Welcome/>
            </TabBarIOS.Item>
                <TabBarIOS.Item
                    selected={this.state.selectedTab === 'home'}
                    icon={require('./images/tab/tabsummary.png')}
                    onPress={() => {
               this.setState({
                  selectedTab: 'home',
              });
          }}>
                    <Home/>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    selected={this.state.selectedTab === 'notice'}
                    icon={require('./images/tab/tabspend.png')}
                    onPress={() => {
              this.setState({
                  selectedTab: 'notice',
              });
          }}>
                    <Spend/>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    selected={this.state.selectedTab === 'spend'}
                    icon={require('./images/tab/tabnotices.png')}
                    onPress={() => {
                this.setState({
                    selectedTab: 'spend',
                });
          }}>
                    <Notice/>
                </TabBarIOS.Item>
            </TabBarIOS>
                </View>
            </Drawer>
        );


    }
}


class CustomNavBar extends Component {
    drawrerClick(){
        alert('drawrerClick!');

    }
    searchlick(){
        alert('searchlick!');
    };
    render() {
        return (
            <View style={styles.navbarItems}>
                <TouchableHighlight onPress={this.drawrerClick}>
                <Image
                    source={require('./images/menutabicon.png')}
                    onClick={this.drawrerClick}
                />
                </TouchableHighlight>
                <Image
                    source={require('./images/buckitlogo.png')}
                />
                <TouchableHighlight onPress={this.searchlick}>
                <Image
                    source={require('./images/searchicon.png')}
                />
                </TouchableHighlight>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    navigationBar: {
        flex:0.8,
        backgroundColor: '#42bae7'
    },
    mainBody: {
        flex:8
    },
    navbarItems: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        marginTop:30,
        paddingLeft:15,
        paddingRight:15,
    },
    drawerStyles:{
        shadowColor: '#000000',
        shadowOpacity: 0.8,
        shadowRadius: 3
    }

});

AppRegistry.registerComponent('SliderExample', () => SliderExample);
AppRegistry.registerComponent('CustomNavBar', () => CustomNavBar);
AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
