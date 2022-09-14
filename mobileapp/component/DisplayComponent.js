import React from 'react';
import {View, ScrollView, StyleSheet, Image,Text} from 'react-native';

function DisplayList(props){

    const renderList = ({restList}) => {
        if(restList){
            return restList.map((item) => {
                return(
                    <View>
                        <Image style={styles.logo}
                        source={{uri: item.restaurant_thumb}}/>
                        <Text>{item.restaurant_name}</Text>
                    </View>
                )
            })
        }
    }

    return(
        <View>
            <ScrollView style={StyleSheet.container}>
                {renderList(props)}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    ScrollView:{
        backgroundColor:'pink',
        marginHorizontal: 20
    },
    text:{
        fontSize:42
    },
    logo:{
        width:250,
        height:200
    }
})

export default DisplayList;