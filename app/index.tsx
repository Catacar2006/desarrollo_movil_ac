import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";
import { Colors } from "react-native/Libraries/NewAppScreen";


export default function App() {
  return (
    <View style={style.container}>
      <Text style={style.text} >Aora ADSO</Text>
      <StatusBar style='auto' />
      <Link  href='/profile' style={{color:'blue'}}>Go to Profile</Link>
    </View>
  )
}


// className = "flex-1 items-center justify-center bg-white"
// className = "text-3*l"

const style=StyleSheet.create({

  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  text:{
    fontSize:24,
  },
})

