import { useState } from "react";
import { SafeAreaView, TextInput, Button } from "react-native";
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

export default function CashControl({navigation, route}){
    const [value, setValue] = useState(0);
    function Save(){
        route.params.SaveCash(value);
        navigation.navigate("Home");
    }
    return(
        <SafeAreaView>
            <TextInput placeholder="0" value={value} onChangeText={setValue} keyboardType = 'numeric'></TextInput>
            <Button title="Save" onPress={Save}></Button>
        </SafeAreaView>
    );
}