
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './components/HomeScreen';
import SelectOpponentScreen from './components/SelectOpponentScreen';
import YourWordsScreen from './components/YourWordsScreen';

const Stack = createNativeStackNavigator();

export default function App({navigation}) {
 
  //const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          
        />
        <Stack.Screen name="SelectOpponentScreen" component={SelectOpponentScreen} />
        <Stack.Screen name="YourWordsScreen" component={YourWordsScreen} />
      </Stack.Navigator>

    
    </NavigationContainer>     
  );
}

