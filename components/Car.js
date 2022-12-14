import { StyleSheet, Text, TextInput, Button, View } from 'react-native';
import React from "react";


export default class Car extends React.Component{

    // 1. Constructor
    constructor(props){
        super(props); 
        this.state= {
            buttonTitle:"Hello!",
            buttonBool: true,
            buttonColor: this.props.buttonColor,
            make: "",
            model: "",
            year: "",
            odometer: ""
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


    async componentDidMount(){
        const response = await fetchCars()
        console.log("all cars: " , response)
    }

    createNewCar = () => {
        console.log("Car Component (internal) state: " , this.state)
    
    }

    
    
    // 3. Part of code that is shown to user
    render(){
        

        return(
        <View style={styles.container}>

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

                <Text> Model </Text>
                 <TextInput style={styles.input}
                 onChangeText={(e) => this.setState({model: e})}
                 ></TextInput>

                <Text> Year </Text>
                 <TextInput style={styles.input}
                 onChangeText={(e) => this.setState({year: e})}
                 ></TextInput>

                <Text> Odometer </Text>
                 <TextInput style={styles.input}
                 onChangeText={(e) => this.setState({odometer: e})}
                 ></TextInput>

                 <Button title={"Submit"}
                    color={this.state.buttonColor}
                    onPress={this.createNewCar}
                    ></Button>
             </View>
        </View>
        )
    }

}

async function fetchCars() {

    let headers = {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Origin': 'http://localhost:3000/*',
        'Accept': "application/json",
        'admin': "true"
    }

    return fetch("http://localhost:3000/cars/all", {
        method: 'GET',
        withCredentials: true,
        headers: headers,
    }).then(response => {
        if(response.ok){
            return response.json();
        }
        else {
            var error = new Error('Error' + response.status + ":" + response.statusText)
            error.response = response;
            throw error; 
        }
    }, error=>{
        var errmess = new Error(error.message);
        throw errmess; 
    })
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


