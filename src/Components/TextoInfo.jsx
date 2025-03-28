import { View,Text,StyleSheet } from "react-native"
import {Ionicons} from "react-native-vector-icons"

export default function TextoInfo({showMessage}){
    return showMessage?<View style={styles.headerContainer}>
            <Ionicons name="arrow-up" size={40} color="white"/>
            <Text style={styles.headerText}>Digite o que você procura...</Text>
         </View>
         :
         null
    
}

const styles = StyleSheet.create({
  headerContainer:{
    alignItems:"center",
    margin:20
  },
  headerText:{
    fontSize:16,
    color:"white",
    textAlign:'center'
  }
})