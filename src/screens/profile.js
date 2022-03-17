import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect, useState, useRef} from 'react'
import { Button } from 'react-native-elements'
import * as firebase from "firebase"
import { useNavigation } from '@react-navigation/native'
import UserInfo from '../components/account/userInfo'
import UserOptions from '../components/account/userOptions'
import Toast from 'react-native-easy-toast'
import Loading from '../components/loading'

export default function profile() {
  const toastRef = useRef();
  const navigation = useNavigation();
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(false)
  const [loadingText, setLoadingText] = useState(null)

  useEffect(() => {
    (async()=>{
      const user = firebase.auth().currentUser;
      setUserInfo(user)
    })();
    
  }, [])
  
  return (
    <View style={styles.userInfo}>
      {userInfo && <UserInfo userInfo={userInfo} toastRef={toastRef} setLoading={setLoading} setLoadingText={setLoadingText} /> }
      <UserOptions/>
      <Button
      title="Cerrar Sesion"
      buttonStyle={styles.btnCloseSesion}
      titleStyle={styles.btnTitle}
      onPress={()=>{
        firebase.auth().signOut(); 
        navigation.navigate("Index");
      }}

      />
      <Toast ref={toastRef} position="center" opacity={0.9} />
      <Loading isVisible={loading} text={loadingText} />
    </View>
  )
}

const styles = StyleSheet.create({
  userInfo:{
    minHeight:"100%",
    backgroundColor:"#f2f2f2"
  },
  btnCloseSesion:{
    marginTop: 30,
    borderRadius:1,
    backgroundColor:"#fcb823",
    borderTopWidth:1,
    borderTopColor:"#e3e3e3",
    borderBottomWidth:1,
    borderBottomColor:"#e3e3e3",
    paddingTop:10,
    paddingBottom:10
  },
  btnTitle:{
    color:"#fff"
  }
})