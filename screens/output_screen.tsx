import {Text, View} from "react-native";
import {NavigationHelpers, NavigationProp, Route, RouteProp, useRoute} from "@react-navigation/native";
import {InputData} from "./input_screen";

export default function OutputScreen(props: OutputScreenParams) {
    console.log(props.navigation)
    // @ts-ignore
    let a = Number(props.route.params.a)
    // @ts-ignore
    let b = Number(props.route.params.b)
    // @ts-ignore
    let c = Number(props.route.params.c)

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        return (
            <View>
                <Text>Your input must be number!</Text>
            </View>
        )
    } else {

        let x1;
        let x2;
        let delta;

        if (a == 0) {
            return (
                <View>
                    <Text>Phương trình có 1 nghiệm là {-c / b}</Text>
                </View>
            )
        }
        delta = Math.pow(b, 2) - 4 * a * c
        if (delta < 0) {
            return (
                <View>
                    <Text>Phương trình vô nghiệm</Text>
                </View>
            )
        } else if (delta == 0) {
            return (
                <View>
                    <Text>Phương trình có nghiệm kép x={-b / (2 * a)}</Text>
                </View>
            )
        } else {
            return (
                <View>
                    <Text>Phương trình có 2 nghiệm</Text>
                    <Text>x1 = {(-b + Math.sqrt(delta) / (2 * a))}</Text>
                    <Text>x2 = {(-b - Math.sqrt(delta) / (2 * a))}</Text>
                </View>
            )
        }
    }

}

interface OutputScreenParams {
    navigation: NavigationHelpers<any>,
    route: Route<any>
}
