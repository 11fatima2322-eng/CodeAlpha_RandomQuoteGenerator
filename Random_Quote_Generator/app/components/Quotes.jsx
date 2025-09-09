import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { quotes } from '../data/quotes';


export default function Quotes(){

    const [index, setIndex] = useState(0);

    const getIndex = ()=>{
        
        const newIndex = Math.floor(Math.random()*quotes.length);
        
        if(index != newIndex) setIndex(newIndex);

    }

    useEffect(()=>{
        getIndex()
    }, [])


    return(
        <View style={styles.main}>  

        <View style={styles.heading}>
            <Text style={styles.head}>Quote Cloud</Text>
            <Text style={styles.tagLine}>A sky full of thoughts</Text>
        </View>

        <View style={styles.container}>
            <View style={styles.text}>
                <Text style={styles.quote}>
                    "{quotes[index].quote}"
                </Text>
                <Text style={styles.author}>
                    --------{quotes[index].author}
                </Text>
            </View>
            
            <View style={styles.button}>
                <Button color='#2d3d54ff' title="New Quote" onPress={getIndex}/>
            </View>
        </View>

        </View>
    )
}

const styles = StyleSheet.create({
    
    main: {
        backgroundColor: '#f9fafb',
        paddingHorizontal: 20,
        justifyContent: 'center',
        height: '100%',
        width: '100%',
    },

    heading: {
        marginBottom: 40,
    },

    head: {
        textAlign: 'center',
        fontSize: 26,
        fontWeight: 600,
        color: '#1f2937',
    },

    tagLine: {
        textAlign: 'center',
        fontSize: 14,
        marginTop: 6,
        color: '#4b5563'
    },

    container: {
        alignItems: 'center',
    },

    text: {
        minHeight: 120,
        justifyContent: 'center',
        paddingHorizontal: 10,
    },

    quote: {
        fontSize: 18,
        fontFamily: 'Verdana',
        textAlign: 'center',
        color: '#111827',
        lineHeight: 26,
    },
    
    author:{
        fontSize: 14,
        marginTop: 10,
        fontStyle: 'italic',
        textAlign: 'right',
        color: '#374151',
    },

    button: {
        marginTop: 30,
        width: '40%',
        alignSelf: 'center',
    }
   
})