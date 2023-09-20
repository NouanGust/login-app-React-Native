import React, {useState} from 'react'
import { View, Text, SafeAreaView, TextInput, TouchableOpacity} from 'react-native'

import LogoSVG from './assets/logo.svg'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'

const LoginScreen = () => {

  return(

    <SafeAreaView style={{flex:1, justifyContent:'center'}}>

      <View style={{paddingHorizontal:25}} >
        <View>
          Svg
        </View>
        <Text style={{fontSize:28, fontWeight:500, color:"#333", marginBottom:30}} >Login</Text>

        <View style={{flexDirection:"row", borderBottomWidth:1, borderBottomColor:"ccc", paddingBottom:8, marginBottom:25}}>
          <MaterialIcons name="alternate-email" size={20} color="#666"  style={{marginRight:5}}/>
          <TextInput placeholder='Email' style={{flex:1, paddingVertical:0}} keyboardType='email-address'></TextInput>
        </View>

        <View style={{flexDirection:"row", borderBottomWidth:1, borderBottomColor:"ccc", paddingBottom:8, marginBottom:25}}>
          <Ionicons name="lock-closed-outline" size={20} color="#666"  style={{marginRight:5}}/>
          <TextInput placeholder='Senha' style={{flex:1, paddingVertical:0}} secureTextEntry={true}></TextInput>
          <TouchableOpacity onPress={() => {}} >
            <Text style={{color:"red", fontWeight:600}}>Recuperar</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => {}} style={{backgroundColor:"lime", padding:20, borderRadius:10, marginBottom:30,}} >
          <Text style={{color:"#333", textAlign:"center", fontWeight:700, fontSize:16}}>Login</Text>
        </TouchableOpacity>

        <Text style={{textAlign:"center", color:"#666"}} >Ou faça login com...</Text>
      </View>
    </SafeAreaView>
  )
}

export default LoginScreen
