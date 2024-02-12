import { StackScreenProps } from "@react-navigation/stack"
import { rootStackParams } from "../navigators/stackNavigator"
import { Button, Text, View, StyleSheet, Image } from "react-native"


interface Props extends StackScreenProps<rootStackParams, any> {

}

export const Login = ({ navigation }: Props) => {
    return (
        <View style = {{flex:1}}>
            <View style={styles.header}>
                <Image style={styles.imagenLogin} source={require("../../assets/icon.png")}/>
                
            </View>
            <View style={styles.contenedor}>
            <Text style={styles.text}>
                    Bienvienido. Logueate plis
                </Text>
                <Text style={styles.text}>Me gusta el pilin</Text>
                <Button title="Presiona aqui para ingresar" onPress={() => {
                    navigation.navigate("inicio")
                }} />
            </View>
        </View>
    )
}


export const styles = StyleSheet.create({
    header: {
        backgroundColor: "#80180F",
        flex: 1/5
    },
    text: {
        
        fontSize: 15,
        justifyContent: "center"
    },
    contenedor:{
        margin: 0,
        paddingBottom: 1,
        justifyContent: "center"

    },
    imagenLogin:{
        marginTop: 30,
        alignSelf: "center",
        height: "81%",
        width: "35%"
    }
})