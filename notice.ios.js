/**
 * Created by moiz on 12/31/16.
 */
'use strict';

import React, {Component} from 'react';

import {
    StyleSheet,
    View,
    Text,
    ListView,
    Image,
    TouchableHighlight,
    ActivityIndicatorIOS

} from 'react-native';

var styles = StyleSheet.create({
    daystyle: {
        justifyContent:'center',
        color:'#6b6b6b',
        paddingTop:5,
        paddingBottom:5,
        fontSize: 12,

    },
    screenItems: {
        alignItems:'center'
    },
    noticecontainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    rightContainer: {
        flex: 1,
        marginLeft:8,
        backgroundColor: '#FFF',
        marginRight:8
    },
    title: {
        fontSize: 12,
        color:'#6b6b6b',
    },
    noticelistView: {
        backgroundColor: '#FFF'
    },
    loading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        color:'#000'
    },separator: {
        height: 1,
        backgroundColor: '#dddddd'
    },imgstyle:{
        backgroundColor: '#e8e8e8',
        paddingLeft:25,
        paddingRight:25,
        paddingTop:10,
        paddingBottom:10
    }
});

class Notice extends Component {
    render() {
        return (
            <View>
            <View style={styles.screenItems}>
            <Text style={styles.daystyle}>Wedesday, Jan 04,2017</Text>
            </View>
            <View style={styles.separator} />
                <NoticeList/>

            </View>
        );
    }
}



var REQUEST_URL = 'https://www.googleapis.com/books/v1/volumes?q=subject:fiction';

class NoticeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            })
        };
    }
    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData.items),
                    isLoading: false
                });
            })
            .done();
    }
    render() {

        if (this.state.isLoading) {
            return this.renderLoadingView();
        }

        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderNotice.bind(this)}
                style={styles.noticelistView}
            />
        );
    }
    renderNotice(notice) {
        return (
            <TouchableHighlight>
                <View>
                    <View style={styles.noticecontainer}>
                        <View style={styles.imgstyle}>
                        <Image
                            source={require('./images/spend/categorymiscellaneousselected.png')}/>
                        </View>
                        <View style={styles.rightContainer}>
                            <Text style={styles.title}>{notice.volumeInfo.title}</Text>
                        </View>
                    </View>
                    <View style={styles.separator} />
                </View>
            </TouchableHighlight>
        );
    }

    renderLoadingView() {
        return (
            <View style={styles.loading}>
                <ActivityIndicatorIOS
                    size='large'/>
                <Text>
                    Loading books...
                </Text>
            </View>
        );
    }
}

module.exports = Notice;