import { Dimensions, StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: 600,
      backgroundColor: "#bcabd1",
      alignItems: "center",
    },
    text: {
      fontSize: 20,
      fontWeight: "400",
    },
    center: {
      width: Dimensions.get("window").width,
      alignItems: "center",
    },
    addBtn:{
      backgroundColor: "#7ca383",
      width: 50,
      height: 50,
      borderRadius: "100%",
      marginRight: 20,
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 10
    },
    chartWindow:{
      width: Dimensions.get("window").width * 0.9, 
      height: 700, 
      flex: 1.5,
      backgroundColor: "#9371a8", 
      alignItems: "center", 
      justifyContent: "center",
      borderRadius: "20%",
    },
    content:{
      flex: 1, 
      flexDirection: "column",  
      alignItems: "center", 
      justifyContent: "center", 
      marginTop: 30,
    },
    list:{
      width: Dimensions.get("window").width * 0.9, 
      height: Dimensions.get("window").height * 0.05, 
      backgroundColor: "#9371a8", 
      borderRadius: 10,
      marginTop: 10,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingLeft: 20,
      paddingRight: 20
    },
    circle: {
      width: 20, 
      height: 20, 
      borderRadius: 100,
    },
    inputCash: {
      backgroundColor: "#bcabd1",
      borderColor: "#00000",
      borderRadius: 10,
      width: Dimensions.get("window").width * 0.9, 
      height: Dimensions.get("window").height * 0.05, 
      fontSize: 25
    },
    category:{
      width: 50, 
      height: 50, 
      borderRadius: 100, 
      alignItems: "center", 
      justifyContent: "center"
    }
  });