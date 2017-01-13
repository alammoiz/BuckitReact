/**
 * Created by moiz on 12/31/16.
 */
'use strict';

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    Text,
    Image,
    ListView,
    TouchableHighlight,
    TouchableOpacity,
    Modal
} from 'react-native';
let items = ['Home','About','Menu','Others','Login','Contact Us','Help','Exit','Logout'];

var styles = StyleSheet.create({
    container: {
        flex: 4
    },
    scrollcontainer: {
        backgroundColor: '#FFF',
        flex:1
    },
    scrolltextcontainer: {
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        paddingLeft:14,
        paddingRight:14

    },
    spendMenutitle:{
        color:'#bcbcbc',
        fontSize:10,
        marginTop:7

    },containerbody: {
        flex: 7,
        backgroundColor: '#FFF'
    },separator: {
        height: 1,
        backgroundColor: '#dddddd'
    },viewupper:{
        padding:15,
        marginLeft:5,
        flexDirection: 'row',
        alignItems: 'center'
    },viewtitle:{
        marginLeft:20

    },
    titleLower:{
        fontSize: 15,
        color: '#656565'
    },
    viewprices:{
        flex: 3,
        alignItems: 'flex-end',
    },
    txtname:{
        fontSize: 14,
        color: '#4d4d4d'
    }, txtprice:{
        fontSize: 14,
        color: '#eb2c41'
    },txtday:{
        fontSize: 12,
        color: '#bcbcbc'
    },
    rightSideImages: {
        alignItems: 'flex-end',
        flexDirection: 'row',
        justifyContent:'flex-end',
        padding:10
    },
    rightSideInnerImages: {
        marginLeft:20
    },
    scrollimg:{
        alignItems: 'center',
        justifyContent:'center'
    },
    hrLine: {
        backgroundColor: '#CCC',
        height:1
    },blistView: {
        backgroundColor: '#FFF'
    },
    modallist: {
        padding:50,
    }
});

var spendResponse ={
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

class Spend extends Component {

    onClick(itemIndex) {
        console.log("Selected: " + items[itemIndex]);
    }


    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scrollcontainer}
                            directionalLockEnabled={false}
                            horizontal={true}
                            alwaysBounceVertical={false}
                            showsHorizontalScrollIndicator={false}
                            alwaysBounceHorizontal={false}
                            showsVerticalScrollIndicator={false}>
                    <View style={styles.scrolltextcontainer}>
                        <View>
                            <Image source={require('./images/notice.png')}/></View>
                        <View><Text style={styles.spendMenutitle}>All</Text></View>
                    </View>

                    <View style={styles.scrolltextcontainer}>
                        <View>
                            <Image source={require('./images/spend/categoryincome.png')}/></View>
                        <View><Text style={styles.spendMenutitle}>Income</Text></View>
                    </View>
                    <View style={styles.scrolltextcontainer}>
                        <View>
                            <Image source={require('./images/spend/categoryhousing.png')}/></View>
                        <View><Text style={styles.spendMenutitle}>Housing</Text></View>
                    </View>
                    <View style={styles.scrolltextcontainer}>
                        <View>
                            <Image source={require('./images/spend/categoryeducation.png')}/></View>
                        <View><Text style={styles.spendMenutitle}>Education</Text></View>
                    </View>
                    <View style={styles.scrolltextcontainer}>
                        <View>
                            <Image source={require('./images/spend/categoryhealth.png')}/></View>
                        <View><Text style={styles.spendMenutitle}>Health Care</Text></View>
                    </View>
                    <View style={styles.scrolltextcontainer}>
                        <View>
                            <Image source={require('./images/spend/categorytransportation.png')}/></View>
                        <View><Text style={styles.spendMenutitle}>Transportaion</Text></View>
                    </View>
                    <View style={styles.scrolltextcontainer}>
                        <View>
                            <Image source={require('./images/spend/categoryfood.png')}/></View>
                        <View><Text style={styles.spendMenutitle}>Food Drinks</Text></View>
                    </View>
                    <View style={styles.scrolltextcontainer}>
                        <View>
                            <Image source={require('./images/spend/categoryrecreation.png')}/></View>
                        <View><Text style={styles.spendMenutitle}>Recreation</Text></View>
                    </View>
                    <View style={styles.scrolltextcontainer}>
                        <View>
                            <Image source={require('./images/spend/categoryshopping.png')}/></View>
                        <View><Text style={styles.spendMenutitle}>Shopping</Text></View>
                    </View>
                    <View style={styles.scrolltextcontainer}>
                        <View>
                            <Image source={require('./images/spend/categorymiscellaneous.png')}/></View>
                        <View><Text style={styles.spendMenutitle}>Misscellaneous</Text></View>
                    </View>
                </ScrollView>
                <View style={styles.hrLine}/>
                <View style={styles.rightSideImages}>
                    <Image style={styles.rightSideInnerImages} source={require('./images/3.png')}/>
                    <Image style={styles.rightSideInnerImages}  source={require('./images/2.png')}/>
                    <Image style={styles.rightSideInnerImages}  source={require('./images/1.png')}/>
                </View>

                <View style={styles.containerbody}>
                    <SpendList/>

                </View>
            </View>
        );
    }
}


class SpendList extends Component {
    listItemClick(){
        alert('list Item long Click!');

    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            modalVisible: false,
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
            dataSource: this.state.dataSource.cloneWithRows(spendResponse.items),
            isLoading: false
        });
    }
    render() {

        if (this.state.isLoading) {
            return this.renderLoadingView();
        }

        return (
            <View>
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderSpend.bind(this)}

            />
                <Modal style={styles.modallist}
                       animationType={"slide"}
                       transparent={false}
                       visible={this.state.modalVisible}
                       onRequestClose={() => {alert("Modal has been closed.")}}>
                    <View style={{marginTop: 22,marginLeft:12}}>
                        <View>
                            <TouchableHighlight onPress={() => {this.setModalVisible(!this.state.modalVisible)}}>
                                <Text style={{color: '#FF0000'}} >Close</Text>
                            </TouchableHighlight>
                            <TouchableOpacity
                                style={{margin: 5}}
                                onPress={() => this.setState({offset: -100})}>
                                <Image source={require('./images/spend/popup/track.png')}/>
                            </TouchableOpacity>
                            <View style={styles.hrLine}/>
                            <TouchableOpacity
                                style={{margin: 5}}
                                onPress={() => this.setState({offset: 0})}>
                                <Image source={require('./images/spend/popup/spend.png')}/>
                            </TouchableOpacity>
                            <View style={styles.hrLine}/>
                            <TouchableOpacity
                                style={{margin: 5}}
                                onPress={() => this.setState({open: false})}>
                                <Image source={require('./images/spend/popup/reclass.png')}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
               {/*<Modal
                    open={this.state.open}
                    modalDidOpen={() => console.log('modal did open')}
                    modalDidClose={() => this.setState({open: false})}
                    style={styles.modallist}
                    >
                    <View>
                        <TouchableOpacity
                            style={{margin: 5}}
                            onPress={() => this.setState({offset: -100})}>
                            <Image source={require('./images/spend/popup/track.png')}/>
                        </TouchableOpacity>
                        <View style={styles.hrLine}/>
                        <TouchableOpacity
                            style={{margin: 5}}
                            onPress={() => this.setState({offset: 0})}>
                            <Image source={require('./images/spend/popup/spend.png')}/>
                        </TouchableOpacity>
                        <View style={styles.hrLine}/>
                        <TouchableOpacity
                            style={{margin: 5}}
                            onPress={() => this.setState({open: false})}>
                            <Image source={require('./images/spend/popup/reclass.png')}/>
                        </TouchableOpacity>
                    </View>
                </Modal>*/}
            </View>

        );
    }
    renderSpend(spend) {

        return (
            <TouchableOpacity onLongPress={() => {this.setModalVisible(true)} }>
                <View>
                <View style={styles.viewupper}>
                    <View>
                        <Image
                            source={require('./images/home.png')}/>
                    </View>
                    <View style={styles.viewtitle}>
                            <Text style={styles.txtname}>SMITH & SONS Limited</Text>
                    </View>
                    <View style={styles.viewprices}>
                        <Text style={styles.txtprice}>-$500.5</Text>
                        <Text style={styles.txtday}>today</Text>
                    </View>
                </View>
                    <View style={styles.separator} />
                </View>
            </TouchableOpacity>
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


module.exports = Spend;
