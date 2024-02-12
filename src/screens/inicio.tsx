import { StackScreenProps } from "@react-navigation/stack"
import { rootStackParams } from "../navigators/stackNavigator"
import { Button, Text, View, StyleSheet, Alert } from "react-native"
import { styles } from "./login"

interface Props extends StackScreenProps<rootStackParams, any> {

}

export const Inicio = ({ navigation }: Props) => {
    return (
        <View style = {{flex:1}}>
            <View style={styles.header}>
                <Text>
                    Iot's
                </Text>
            </View>
            <View >
                
                <Button title="Iot Foco" onPress={() => {
                    Alert.alert("Funcionando","El foco esta prendido");
                    <View >
                        <Text style={styles.text}>
                            Ya prendio tu
                            
                        </Text>
                    </View>
                }} />
            </View>
        </View>
    )
}


