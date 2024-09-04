import { Text, View, Image, StyleSheet } from 'react-native'; 
import React from 'react';

const Testimony = ({ name, country, post, company, picture, testimony }) => {
    return (
    <View style={styles.testimonyContainer}>
        <View style={styles.imageContainer}>
            <Image source={picture} style={styles.picture}/>
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.name}>{name} en {country}</Text>
            <Text style={styles.post}>{post} en {company}</Text>
            <Text style={styles.testimony}>{testimony}</Text>
        </View>
    </View>
    );
};

const styles = StyleSheet.create({
    testimonyContainer: {
        flex: 1,
        flexDirection:'row',
        minHeight:250,
        backgroundColor: '#fff',
        marginTop:15,
        marginLeft:15,
        marginRight:15,
        shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 3,
            },
            shadowOpacity: 0.29,
            shadowRadius: 4.65,

            elevation: 7,
    },
    imageContainer: {
        flex: 1,
        alignSelf:'center',
    },
    picture: {
        height: 250,
        width: '100%',
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 10,
        textAlign: 'center'
    },
    post: {
        fontSize: 16,
        textAlign:'center',
        marginVertical: 5,
    },
    testimony: {
        flex:1,
        fontSize: 14,
        textAlign: 'justify',
        marginLeft:10,
        marginRight:10,
        marginVertical: 10,
    },
    textContainer: {
        flex: 2,
        alignSelf:'center',
    },
});

export default Testimony;
