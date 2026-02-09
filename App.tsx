/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar,  useColorScheme, } from 'react-native';
import {
  SafeAreaProvider,
 
} from 'react-native-safe-area-context';
import Button from './src/components/common/Button';
import Login from './src/screens/public/auth/Login';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
 

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Login/>
     
    </SafeAreaProvider>
  );
}




export default App;
