import { Text, SafeAreaView, Dimensions, TextInput, Button, View, FlatList } from "react-native";
import { useState } from "react";
import PieChart from "react-native-expo-pie-chart";

export default function Main({navigation}) {
    const [currentCash, setCurrentCash] = useState(1000);
    const [data, setData] = useState([{key: "1", name: "Food",  count: 3, color: "red"}]);
    function SaveCash(value){
        setCurrentCash(currentCash - value);
    }
    return (
      <SafeAreaView>
        <Text>Current cash: {currentCash}</Text>
        <Button title="Add" onPress={() => navigation.navigate("Control", {SaveCash: SaveCash})}></Button>
        <View style={{flexDirection: "column",  alignItems: "center", justifyContent: "center"}}>
          <View style={{width: "100%", height: "60%"}}>
            <PieChart
              data={data}
              length={200}
          />
          </View>
          <View style={{width: "100%", alignItems: "center", justifyContent: "center"}}>
            <FlatList data={data} renderItem={({item}) => <Text>{item.name}</Text>} key={item => item.key}></FlatList>
          </View>
        </View>
      </SafeAreaView>
    );
  }
