import { StyleSheet, Text, View } from 'react-native';
import React from "react";


export default class Car extends React.Component{

    // 1. Constructor
    constructor(props){
        super(props); 
        this.state= {
            buttonTitle:"Hello!"
        }
    }


    // 2. Functional Code


    // 3. Part of code that is shown to user
    render(){
        return(<View style={styles.container}>

            <Text> This is the car component</Text>
        </View>)
    }

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button:{

    }
})


