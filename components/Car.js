import { StyleSheet, Text, Button, View } from 'react-native';
import React from "react";
// import specialFucntion from anotherComponet


export default class Car extends React.Component{

    // 1. Constructor
    constructor(props){
        super(props); 
        this.state= {
            buttonTitle:"Hello!",
            buttonBool: true,
            buttonColor: this.props.buttonColor,
        }
    }


    // 2. Functional Code

    doSomething = () => {
        console.log(this.state.buttonBool)
        if(this.state.buttonBool){
            this.setState({buttonTitle: "Off!"})
            this.setState({buttonColor: "grey"})
            console.log("off")
        } else {
            this.setState({buttonTitle: "On!"})
            this.setState({buttonColor: this.props.buttonColor})
            console.log("on")
        }
        this.setState({buttonBool: !this.state.buttonBool})
        console.log(this.state.buttonBool)
    }

    

    // 3. Part of code that is shown to user
    render(){
        return(<View style={styles.container}>

            <Text> Car Component</Text>
            <Button title={this.state.buttonTitle}
             color={this.state.buttonColor}
             onPress={this.doSomething}
             ></Button>
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


