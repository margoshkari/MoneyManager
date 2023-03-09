import { useState } from "react";
import { Dimensions, SafeAreaView, TextInput, Button, TouchableWithoutFeedback, View, Text } from "react-native";
import { LogBox } from 'react-native';
import { styles } from "../styles/style";

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

export default function CashControl({navigation, route}){
    const [value, setValue] = useState(0);
    const [color, setColor] = useState("");
    const [category, setCategory] = useState("");
    function Save(){
        if(value > 0 && category != "" && color != ""){
            route.params.SaveCash(value);
            route.params.AddData(category, value, color);
            navigation.navigate("Home");
        }
    }
    const SaveData = (category, color) =>{
        setCategory(category);
        setColor(color);
    }
    return(
        <SafeAreaView style={{backgroundColor: "#b49bd1", height: Dimensions.get("window").height, alignItems: "center"}}>
            <TextInput placeholder="0" style={styles.inputCash} value={value} onChangeText={setValue} keyboardType = 'numeric'></TextInput>
            <View style={{flexDirection:"row"}}>
                <TouchableWithoutFeedback>
                    <View style={[styles.category, {backgroundColor: "#80c492"}]}>
                        <Text onPress={() => SaveData("Food", "#80c492")}>Food</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <View style={[styles.category, {backgroundColor: "#4d8772"}]}>
                        <Text onPress={() => SaveData("Cloth", "#4d8772")}>Cloth</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
            <Button title="Save" onPress={Save}></Button>
        </SafeAreaView>
    );
}