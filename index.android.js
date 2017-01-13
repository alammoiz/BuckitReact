/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
//import MaterialKit  from 'react-native-material-kit';

var nativeImageSource = require('nativeImageSource');
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ToolbarAndroid,
    DrawerLayoutAndroid,
    ListView,
    Image
} from 'react-native';

const DRAWER_REF = 'drawer';

let items = ['Home','About','Menu','Others','Login','Contact Us','Help','Exit','Logout'];
var Slider = require('react-native-slider');
export default class AwesomeProject extends Component {

    onClick(itemIndex) {
        console.log("Selected: " + items[itemIndex]);
    }

    render() {

        var navigationView = (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <Image source={require('./images/buckit_logo.png')} style={{width: 40, height: 40}}/>
                <DrawerMenuItem itemName="friends" menuText="Friends"/>
                <DrawerMenuItem itemName="bankaccounts" menuText="Bank Accounts"/>
                <DrawerMenuItem itemName="history" menuText="History"/>
                <DrawerMenuItem itemName="terms" menuText="Terms"/>
                <DrawerMenuItem itemName="help" menuText="Help"/>
            </View>
        );
        return (
            <DrawerLayoutAndroid
                drawerWidth={300}
                drawerHeight={100}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                ref={DRAWER_REF}
                renderNavigationView={() => navigationView}>
                <View style={{flex: 1}}>
                    <View style={styles.containerToolbar}>
                        <ToolbarAndroid
                            actions={[]}
                            onIconClicked={() => this.refs[DRAWER_REF].openDrawer()}
                            title="Buckit"
                            titleColor="white"
                            style={styles.toolbar}
                            subtitle="Status"
                        />
                    </View>
                    <View style={styles.containerToolbar}>
                        <ScrollingMenu
                            items={items}
                            callback={this.onClick.bind(this)}
                            backgroundColor="#ffffff"
                            textColor="#cccccc"
                            selectedTextColor="#000000"
                            itemSpacing={20}/>
                    </View>
                    <ListViewBasics style={{width: 50, height: 50, backgroundColor: 'powderblue'}}/>
                    <View style={styles.containerSlider}>
                        <SliderExample/>
                    </View>
                    <View style={styles.containerPager}>
                        <ScrollableTabView
                            initialPage={0}>
                            <Text tabLabel='Tab #1'>Home</Text>
                            <Text tabLabel='Tab #2'>Favorite</Text>
                            <Text tabLabel='Tab #3'>About</Text>
                            <Text tabLabel='Tab #4'>Help</Text>
                        </ScrollableTabView>
                    </View>
                </View>
            </DrawerLayoutAndroid>


        );


    }
}

class ListViewBasics extends Component {
    // Initialize the hardcoded data
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([
                'John1', 'Joel1', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
            ])
        };
    }

    render() {
        return (

            <View style={{flex: 1, paddingTop: 22}}>

                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <Text>{rowData}</Text>}
                />
            </View>
        );
    }
}
/*class ScrollingMenu extends Component{
 onClick(itemIndex) {
 console.log("Selected: " + items[itemNum]);
 }

 render() {
 return (
 <ScrollingMenu
 items={items}
 callback={this.onClick.bind(this)}
 backgroundColor="#ffffff"
 textColor="#cccccc"
 selectedTextColor="#000000"
 itemSpacing={20} />
 );
 }
 }*/

/*class ScrollableTabView extends Component{
 render() {
 return (<ScrollableTabView
 style={{marginTop: 20, }}
 initialPage={0}
 renderTabBar={() => <ScrollableTabBar />}
 >
 <Text tabLabel='Tab #1'>Home</Text>
 <Text tabLabel='Tab #2'>Favorite</Text>
 <Text tabLabel='Tab #3'>About</Text>
 <Text tabLabel='Tab #4'>Help</Text>
 <Text tabLabel='Tab #5'>Contact</Text>
 </ScrollableTabView>);
 }
 }*/



class DrawerMenuItem extends Component {
    images = {
        friends: require('./images/drawer_icon_friends.png'),
        bankaccounts: require('./images/drawer_icon_bankaccounts.png'),
        history: require('./images/drawer_icon_history.png'),
        profile: require('./images/drawer_icon_profile.png'),
        mybuckit: require('./images/drawer_icon_mybuckit.png'),
        terms: require('./images/drawer_icon_terms.png'),
        help: require('./images/drawer_icon_help.png'),
        notification: require('./images/drawer_icon_notification.png')
    };

    constructor(props) {
        super(props);

        console.log(JSON.stringify(this.images));
        console.log("Got new properties " + JSON.stringify(props));


        this.imageText = props.menuText;
        this.imageSource = this.images[props.itemName];
    }

    render() {
        return (
            <View style={ styles.container }>
                <Image source={ this.imageSource }/>
                <Text style={styles.instructions}>{this.imageText}</Text>
            </View>)
    }
}

class SliderExample extends Component {

    render() {
        return (
            <Slider
                value={0.2}/>
        );
    }
}


// App registration and rendering
AppRegistry.registerComponent('ListViewBasics', () => ListViewBasics);
AppRegistry.registerComponent('DrawerMenuItem', () => DrawerMenuItem);
AppRegistry.registerComponent('SliderExample', () => SliderExample);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    toolbar: {
        backgroundColor: '#50C7EF',
        height: 56,
    },
    containerToolbar: {
        flex: 1,
        //justifyContent: 'flex-end',
        //justifyContent: 'flex-start',
        //alignItems: 'stretch',
        backgroundColor: '#F5FCFF',
    },containerPager: {
        flex: 6,
        backgroundColor: '#00CC00',
    },
    containerSlider: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        alignItems: 'stretch',
        justifyContent: 'center'
    }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
