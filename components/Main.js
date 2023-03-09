import { Text, SafeAreaView, Dimensions, TextInput, Button, View, FlatList } from "react-native";
import { useState } from "react";
import PieChart from "react-native-expo-pie-chart";
import { styles } from "../styles/style";
import { TouchableWithoutFeedback } from "react-native-web";

export default function Main({navigation}) {
    const [currentCash, setCurrentCash] = useState(1000);
    const [data, setData] = useState([]);
    
    function SaveCash(value){
        setCurrentCash(currentCash - value);
    }
    const AddData = (category, count, color) => {
      setData([...data, {key: Date.now(), category: category, count: Number(count), color: color}])
      console.log(data);
    }
    return (
      <SafeAreaView style={{backgroundColor: "#b49bd1", height: Dimensions.get("window").height}}>
        <View style={styles.center}>
          <Text style={styles.text}>Total</Text>
          <Text style={styles.text}>₴{currentCash}</Text>
          <View style={{flexDirection: "row", justifyContent: "space-around", width: "100%"}}>
            <TouchableWithoutFeedback>
              <Text style={styles.text}>Expenses</Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
              <Text style={styles.text}>Income</Text>
            </TouchableWithoutFeedback>
          </View>
        </View>
        
        <View style={styles.content}>
          <View style={styles.chartWindow}>
             <PieChart
              data={data}
              length={200}
              zeroTotalCircleColor={"#b49bd1"}
          /> 
            <View style={{alignSelf: "flex-end"}}>
              <TouchableWithoutFeedback>
                <View style={styles.addBtn}>
                  <Text style={styles.text} suppressHighlighting={true} onPress={() => navigation.navigate("Control", {SaveCash: SaveCash, AddData:AddData})}>+</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>

          <View style={{width: "100%", alignItems: "center", justifyContent: "center", flex: 2}}>
            <FlatList data={data} key={item => item.key} renderItem={({item}) => 
              <View style={styles.list}>
                <View style={{flexDirection: "row", justifyContent: "space-around", alignItems:"center", width: "20%"}}>
                  <View style={[styles.circle, {backgroundColor: item.color}]}></View>
                  <Text>{item.category}</Text>
                </View>
                <Text>₴{item.count}</Text>
              </View>
            }></FlatList>
          </View>
        </View>
      </SafeAreaView>
    );
  }
