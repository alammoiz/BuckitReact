/**
 * Created by moiz on 12/31/16.
 */
'use strict';

import React, {Component} from 'react';
var Slider = require('react-native-slider');

import {
    StyleSheet,
    View,
    Text,
    Image,
    ListView,
    TouchableHighlight
} from 'react-native';

var styles = StyleSheet.create({
    description: {
        fontSize: 20,
        textAlign: 'center',
        color: '#FFFFFF'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerSlider: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        alignItems: 'stretch',
        justifyContent: 'center'
    },
    //book
    bookcontainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        padding: 10
    },
    thumbnail: {
        width: 53,
        height: 81,
        marginRight: 10
    },
    rightContainer: {
        flex: 1
    },
    title: {
        fontSize: 20,
        marginBottom: 8
    },
    author: {
        color: '#656565'
    },
    blistView: {
        backgroundColor: '#F5FCFF'
    },
    loading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    separator: {
        height: 1,
        backgroundColor: '#dddddd'
    },viewupper:{
        flex:2,
        marginLeft:20,
        marginTop:5,
        flexDirection: 'row',
        alignItems: 'center'
    },viewlower:{
        flex:1,
        marginLeft:20

    },
    titleLower:{
        fontSize: 15,
        color: '#656565'
    },
    viewpricewithline:{
        flex: 3,
    },
    txtprice:{
        fontSize: 20,
        color: '#50C7EF',
        marginLeft:10,
        fontWeight: 'bold',
    },
    pricedollar:{
        flex: 1,
        fontSize: 20,
        color: '#50C7EF',
        marginTop:15,
        fontWeight: 'bold',
    },
    priceseparator: {
        height: 4,
        backgroundColor: '#dddddd',
        margin: 10
    },
});


class Home extends Component {
    render() {
        return (
            <BookList/>
        );
    }
}


class SliderExample extends Component {

    getInitialState() {
        return {
            value: 0.2,
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <Slider
                    value={0.5}/>
                <Text>Value: 0.5</Text>
            </View>
        );
    }
}


var resdata ={
    "kind": "books#volumes",
        "totalItems": 499,
        "items": [
        {
            "kind": "books#volume",
            "id": "kAJCDAAAQBAJ",
            "etag": "2x/LGvHJdqw",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/kAJCDAAAQBAJ",
            "volumeInfo": {
                "title": "Lolita",
                "subtitle": "",
                "authors": [
                    " Vladimir Nabokov"
                ],
                "publisher": "Hamilton Books",
                "publishedDate": "2016-05-30",
                "description": "Humbert Humbert - scholar, aesthete and romantic - has fallen completely and utterly in love with Lolita Haze, his landlady's gum-snapping, silky skinned twelve-year-old daughter. Reluctantly agreeing to marry Mrs Haze just to be close to Lolita, Humbert suffers greatly in the pursuit of romance; but when Lo herself starts looking for attention elsewhere, he will carry her off on a desperate cross-country misadventure, all in the name of Love. Hilarious, flamboyant, heart-breaking and full of ingenious word play, Lolita is an immaculate, unforgettable masterpiece of obsession, delusion and lust.",
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=kAJCDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=kAJCDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.com/books?id=kAJCDAAAQBAJ&printsec=frontcover&dq=subject:fiction&hl=&cd=1&source=gbs_api",
                "infoLink": "http://books.google.com/books?id=kAJCDAAAQBAJ&dq=subject:fiction&hl=&source=gbs_api",
                "canonicalVolumeLink": "http://books.google.com/books/about/Lolita.html?hl=&id=kAJCDAAAQBAJ"
            }
        },
        {
            "kind": "books#volume",
            "id": "8rU0YhOzjg4C",
            "etag": "9TR5hjJeMTA",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/8rU0YhOzjg4C",
            "volumeInfo": {
                "title": "A Pimp's Life",
                "authors": [
                    "Treasure Hernandez"
                ],
                "publisher": "Urban Books",
                "publishedDate": "2009-02-01",
                "description": "In the tradition of Donald Goines and Iceberg Slim comes A Pimp's Life, the story of the rise and fall of Mack Jones. He's at the top of his pimp game in Queens, New York, until he breaks one of the cardinal rules of Pimping 101 and falls in love with one of his girls. Destiny was once an innocent young girl tricked into selling her body, but now she's as tough as the most seasoned professionals on the street. Then a tragic turn of events causes her to open her heart once again. When Mack is shot, she stays by his side during his recovery, proving herself to be as devoted as any wife would be to her husband. After she sees that Mack has regained his strength, Destiny finally gathers the courage to leave the life behind her, and Mack is forced to make a decision. He won't stop her from leaving, but he must decide if he will follow her out of the game. Will he stay with what he's always known, or take a chance on love? And even if he does choose to get out, will the streets let him go that easy?",

                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=8rU0YhOzjg4C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=8rU0YhOzjg4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.com/books?id=8rU0YhOzjg4C&printsec=frontcover&dq=subject:fiction&hl=&cd=9&source=gbs_api",
                "infoLink": "http://books.google.com/books?id=8rU0YhOzjg4C&dq=subject:fiction&hl=&source=gbs_api",
                "canonicalVolumeLink": "http://books.google.com/books/about/A_Pimp_s_Life.html?hl=&id=8rU0YhOzjg4C"
            }
        },
        {
            "kind": "books#volume",
            "id": "9PFZQ8vNQb4C",
            "etag": "NWJqFZPMzT4",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/9PFZQ8vNQb4C",
            "volumeInfo": {
                "title": "Jane Austen's.",
                "authors": [
                    "Jane Austen",
                    "Hugh Thomson"
                ],
                "publisher": "Shoes & Ships & Sealing Wax",
                "publishedDate": "2008-03-01",
                "description": "Marianne Dashwood wears her heart on her sleeve, and when she falls in love with the dashing, but unsuitable, John Willougby, she ignores her sister Elinor's warning that her impulsive behaviour leaves her open to gossip and innuendo. Meanwhile, Elinor always sensitive to social convention, is struggling to conceal her own romantic disappointment, even from those closest to her. Through their parallel experience of love - and its threatened loss - the sisters learn that sense must mix with sensibility if they are to find personal happiness in a society where status and money govern the rules of love.",
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=9PFZQ8vNQb4C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=9PFZQ8vNQb4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.com/books?id=9PFZQ8vNQb4C&printsec=frontcover&dq=subject:fiction&hl=&cd=10&source=gbs_api",
                "infoLink": "http://books.google.com/books?id=9PFZQ8vNQb4C&dq=subject:fiction&hl=&source=gbs_api",
                "canonicalVolumeLink": "http://books.google.com/books/about/Jane_Austen_s_Sense_and_Sensibility_Illu.html?hl=&id=9PFZQ8vNQb4C"
            }
        }
    ]
}
class BookList extends Component {
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
        /*fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData.items),
                    isLoading: false
                });
            })
            .done();*/
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(resdata.items),
            isLoading: false
        });
    }
    render() {

        if (this.state.isLoading) {
            return this.renderLoadingView();
        }

        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderBook.bind(this)}
                style={styles.blistView}
            />
        );
    }
    renderBook(book) {
        return (
            <TouchableHighlight>
                <View>
                    <View style={styles.viewupper}>
                        <Image
                            source={require('./images/home.png')}
                        />
                        <View style={styles.viewpricewithline}>
                        <Text style={styles.txtprice}>$500 / - $ 0</Text>
                            <View style={styles.priceseparator} />
                        </View>
                        <Text style={styles.pricedollar}>$500</Text>
                </View>
                    <View style={styles.viewlower}>
                        <Text style={styles.titleLower}>{book.volumeInfo.title}</Text>
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


module.exports = Home;