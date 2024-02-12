import { createStackNavigator } from "@react-navigation/stack";
import { Login } from "../screens/login";
import { Inicio } from "../screens/inicio";

export type rootStackParams = {
    login: undefined;
    inicio: undefined;

}

const stack = createStackNavigator<rootStackParams>(); //Crear el stack

export const StackNavigator = () => {
  return (
    <stack.Navigator 
        screenOptions={{headerShown: false}}
    >
        <stack.Screen name="login" component={Login}/>
        <stack.Screen name="inicio" component={Inicio} />
    </stack.Navigator>
  )
}