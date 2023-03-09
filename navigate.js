
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CashControl from './components/CashControl.js';
import Main from "./components/Main.js"

export default function Navigate() {
    const Stack = createStackNavigator();
    return (
       <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Main} />
          <Stack.Screen name="Control" component={CashControl} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }