import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import 'react-native-gesture-handler'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList
} from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import ProductComponent from './pages/product/product'
import ProductEditComponent from './pages/product/product-edit'
import MemberComponent from './pages/member/member'
import MemberDetailComponent from './pages/member/member-detail'
import MemberEditComponent from './pages/member/member-edit'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import ProfileComponent from './drawer_components/Profile'
import SettingsComponent from './drawer_components/Settings'
const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()
const Drawer = createDrawerNavigator()

function ProductStacks () {
  return (
    <Stack.Navigator >
      <Stack.Screen
        name='ProductScreen'
        component={ProductComponent}
      ></Stack.Screen>
      <Stack.Screen
        name='ProductEditScreen'
        component={ProductEditComponent}
      ></Stack.Screen>
    </Stack.Navigator>
  )
}

function MemberStacks () {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen
        options={{headerShown:false}}
        name='MemberScreen'
        component={MemberComponent}
      ></Stack.Screen>
      <Stack.Screen
        name='MemberDetailScreen'
        component={MemberDetailComponent}
      ></Stack.Screen>
      <Stack.Screen
      
        name='MemberEditScreen'
        component={MemberEditComponent}
      ></Stack.Screen>
    </Stack.Navigator>
  )
}
function ProductTab () {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName='Product'
    >
      <Tab.Screen name='Product' component={ProductStacks}></Tab.Screen>
      <Tab.Screen name='Member' component={MemberStacks}></Tab.Screen>
    </Tab.Navigator>
  )
}

const DrawerContent =(props:any)=>{
  return(
    <DrawerContentScrollView>
      <View style={styles.appNameContainer}>
        <Text style={styles.appNameText}>APP NAME</Text>
      </View>
      <DrawerItemList {...props}/>
    </DrawerContentScrollView>
  )
}

export default function App () {
  return (
    <SafeAreaProvider >
      <StatusBar backgroundColor='#ffff' barStyle={'dark-content'}/>
      <NavigationContainer>
      <Drawer.Navigator screenOptions={{ headerShown: false }} drawerContent={DrawerContent} >
        <Drawer.Screen name='Home' component={ProductTab} />
        <Drawer.Screen name='Profile' component={ProfileComponent} />
        <Drawer.Screen name='Settings' component={SettingsComponent} />
      </Drawer.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  appNameContainer:{
    margin:5,
    padding:8,
    borderBottomWidth:1,
    borderBottomColor:'#e1e1e1'
  },
  appNameText:{
    textAlign:'center',
    fontSize:20,
    fontWeight:'800',
    
  }
})
