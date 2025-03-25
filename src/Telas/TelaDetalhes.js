import { StyleSheet,ImageBackground,Text,View,Linking, TouchableOpacity} from "react-native"
import {Ionicons} from 'react-native-vector-icons'
import { SafeAreaView } from "react-native-safe-area-context"
import { Image } from "expo-image"

export default function TelaDetalhes({navigation,route}){
    const dados = route.params.item
    //console.log(dados)
    return(
        <ImageBackground
            source={require("../../assets/BG.png")}
            style={styles.container}
        >
        <SafeAreaView style={{flexDirection:'row'}}>
            <Ionicons name="chevron-back" size={40} color="white" onPress={()=>navigation.goBack()}/>
            <Text style={{fontSize:30,color:"white"}}>Detalhes</Text>
        </SafeAreaView>
        
        <View style={styles.imageContainer}>
            <Image
                style={{flex:1}}
                source={{uri:dados.images.original.url}}
            />
        </View>

        <View>
            <Text style={{fontSize:20,color:"white"}}>{dados.title}</Text>
            <TouchableOpacity onPress={()=>Linking.openURL(dados.images.original.url)}>
                <Ionicons name="globe" size={40} color="white"/>
            </TouchableOpacity>            
        </View>
        

        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    imageContainer:{
        width:"100%",
        height:"50%",
        backgroundColor:"grey"
    }
})