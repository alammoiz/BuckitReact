/**
 * Created by moiz on 12/31/16.
 */
'use strict';

import React, {Component} from 'react';
import  {
    PropTypes,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image
} from 'react-native'
class SlidingMenu extends Component {
    render() {
        return (
            <View style={styles.containerdrawrer}>
        <View style={styles.drawrerHeader}>
            <Image style={styles.drawrerImage} source={require('./images/settings/drawrerheader.png')}/>
        </View>
            <ScrollView >
                {/*<Text style={styles.controlText}>Control Panel</Text>
                <TouchableOpacity style={styles.button} >
                    <Text>Close Drawer</Text>
                </TouchableOpacity>*/}
                <View style={styles.containerDrawrerItem}>
                        <Image  source={require('./images/settings/settingprofile.png')}/>
                    <Text style={styles.drawrerItemTitle}>Profile</Text>
                </View>
                <View style={styles.hrLine}/>
                <View style={styles.containerDrawrerItem}>
                    <Image  source={require('./images/settings/settingmybuckit.png')}/>
                    <Text style={styles.drawrerItemTitle}>My Buckit</Text>
                </View>
                <View style={styles.hrLine}/>
                <View style={styles.containerDrawrerItem}>
                    <Image  source={require('./images/settings/settingfriends.png')}/>
                    <Text style={styles.drawrerItemTitle}>Friends</Text>
                </View>
                <View style={styles.hrLine}/>
                <View style={styles.containerDrawrerItem}>
                    <Image  source={require('./images/settings/settingbankaccount.png')}/>
                    <Text style={styles.drawrerItemTitle}>Bank Accounts</Text>
                </View>
                <View style={styles.hrLine}/>
                <View style={styles.containerDrawrerItem}>
                    <Image  source={require('./images/settings/settingnotification.png')}/>
                    <Text style={styles.drawrerItemTitle}>Notification</Text>
                </View>
                <View style={styles.hrLine}/>
                <View style={styles.containerDrawrerItem}>
                <Image  source={require('./images/settings/settingtermsofuse.png')}/>
                <Text style={styles.drawrerItemTitle}>Terms</Text>
                </View>
                <View style={styles.hrLine}/>
                <View style={styles.containerDrawrerItem}>
                <Image  source={require('./images/settings/settinghelp.png')}/>
                <Text style={styles.drawrerItemTitle}>Help</Text>
                </View>
                <View style={styles.hrLine}/>
                <View style={styles.containerDrawrerItem}>
                    <Image  source={require('./images/settings/settinglogout.png')}/>
                <Text style={styles.drawrerItemTitle}>Logout</Text>
            </View>
            </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerdrawrer: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    containerDrawrerItem: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding:13
    },
    drawrerHeader: {
        backgroundColor: '#50C7EF',
        height:61,
    },
    drawrerImage: {
     marginTop:20,
    marginLeft:13
    },
    hrLine: {
        backgroundColor: '#CCC',
        height:1
    },
    drawrerItemTitle:{
        color:'#6d6d6d',
        textAlign:'center',
        fontSize:15,
        marginLeft:20

    }
})

module.exports = SlidingMenu;