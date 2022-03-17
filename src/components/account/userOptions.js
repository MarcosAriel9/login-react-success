import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import{ListItem} from "react-native-elements"
import { map } from 'lodash'

export default function userOptions() {
  const selectComponent=(key)=>{
switch (key) {
  case "displayName":
    
    break;
    case "email":
    
      break;
      case "password":
    
        break;

  default:
    break;
}
  }
  const munuOptions=generateOptions()
  console.log(munuOptions)
  return (
    <View>
  <ListItem
  key={1}
  title={"cambiar nombre y apellido"}
  containerStyle={styles.munuItem}
  onPress={()=>console.log("hoola   ")}
  />
   <ListItem
  key={2}
  title={"cambiar contraseña"}
  containerStyle={styles.munuItem}
  onPress={()=>console.log("contra  ")}
  />
    </View>
  )
}
function generateOptions(){
return[
  {    title:"cambiar nombre y apellido",
  iconType:"material-community",
  iconName:"account-circle",
  iconColor:"#ccc"},
  {
    title:"cambiar correo electronico",
    iconType:"material-community",
    iconName:"at",
    iconColor:"#ccc"

},{

  title:"cambiar contraseña",
  iconType:"material-community",
  iconName:"lock-reset",
  iconColor:"#ccc"
}
]
}
const styles = StyleSheet.create({
  munuItem:{
    borderBottomWidth:1,
    borderBottomColor:"#f3f3f3"
  }
})