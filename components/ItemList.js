import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function ItemList(props) {
    return (
        <View style={styles.listContainer}>
            <Text style={styles.textNumber}>{props.index + 1}</Text>
            <Text style={styles.textList}>{props.textItem}</Text>
            <TouchableOpacity 
            style={styles.imageButton} 
            onPress={props.onDelete}>
                <Image
                    source={require('../assets/icons8-trash-24.png')}
                    style={styles.image}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    listContainer: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        marginBottom: 10,
        backgroundColor: '#ffff',
        padding: 10,
        marginBottom: 20,
        borderRadius: 5,
      
    },
    textList:{
        fontSize: 18,
        maxWidth: '80%'
    },
    textNumber: {
        fontWeight: 'bold',
        color: '#800080',
         fontSize: 15,
    },
    imageButton: {
        backgroundColor: '#800080',
        borderRadius: 20,
        padding: 10,
    },
    image: {
        width: 24,
        height: 24,
    }
});
