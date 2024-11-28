import { NavigationContainer } from '@react-navigation/native'
import { Routes } from './src/routes'
import { fetch } from 'cross-fetch';
import 'cross-fetch/dist/react-native-ponyfill';


export default function App(){
  return(
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  )
}

