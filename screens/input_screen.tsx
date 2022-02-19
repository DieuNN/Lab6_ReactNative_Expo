import {Button, StyleSheet, TextInput, View} from "react-native";
import {NavigationHelpers} from "@react-navigation/native";
import {useState} from "react";

export function InputScreen({navigation}: InputScreenParams) {
    const [numberA, setNumberA] = useState('');
    const [numberB, setNumberB] = useState('');
    const [numberC, setNumberC] = useState('');
    return (
        <View style={InputScreenStyles.container}>
            <TextInput placeholder={"A"} value={numberA.toString()} onChangeText={text => setNumberA((text))}
                       />
            <TextInput placeholder={"B"} value={numberB.toString()} onChangeText={text => setNumberB((text))}
                       />
            <TextInput placeholder={"C"} value={numberC.toString()} onChangeText={text => setNumberC((text))}
                       />
            <Button title={"Calculate"} onPress={() => {
                navigation.navigate('OutputScreen',
                    {
                        a:numberA,
                        b:numberB,
                        c:numberC
                    }
                )
                console.log(numberA)
                console.log(numberB)
                console.log(numberC)
            }}/>
        </View>
    )
}

const InputScreenStyles = StyleSheet.create({
    container: {
        padding: 16
    }
})

interface InputScreenParams {
    navigation: NavigationHelpers<any>,
    data: InputData
}

export interface InputData {
    a: number,
    b: number,
    c: number
}
