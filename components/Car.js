import { StyleSheet, Text, TextInput, Button, View } from 'react-native';
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
            make: ""
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

    createNewCar = () => {}

    
    
    // 3. Part of code that is shown to user
    render(){
        console.log("make state: " , this.state.make)

        return(<View style={styles.container}>

            <Text style={{fontSize: "25px"}}> Car Component</Text>
            {/* <Button title={this.state.buttonTitle}
             color={this.state.buttonColor}
             onPress={this.doSomething}
             ></Button> */}
             <View>
                 <Text style={{fontSize: "17px"}}>Create New Car Form</Text>

                <Text> Make </Text>
                 <TextInput style={styles.input}
                 onChangeText={(e) => this.setState({make: e})}
                 ></TextInput>

                 <Button title={"Submit"}
             color={this.state.buttonColor}
             onPress={this.createNewCar}
             ></Button>
             </View>
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
    input:{
        borderColor: "#c7971e",
        padding: "2%",
        margin: "5%",
        borderStyle: "solid",
        borderRadius: "5%",
        borderWidth: "1px",
    }
})


