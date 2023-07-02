
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import HomeScreen from './components/HomeScreen';
import SelectOpponentScreen from './components/SelectOpponentScreen';
import YourWordsScreen from './components/YourWordsScreen';
import OpponentWordScreen from './components/OpponentWordScreen';
import { TimerProvider } from './components/TimerContext';

const Stack = createStackNavigator();

export default function App({navigation}) {
 
  //const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <TimerProvider>
      <Stack.Navigator  screenOptions={{
          headerShown: false,
          ...TransitionPresets.ModalSlideFromBottomIOS,
           // Apply the transition preset
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          
        />
        <Stack.Screen name="SelectOpponentScreen" component={SelectOpponentScreen} />
        <Stack.Screen 
          name="YourWordsScreen" 
          component={YourWordsScreen} 
          screenOptions={{
          headerShown: false,
          ...TransitionPresets.ModalSlideFromBottomIOS, // Apply the transition preset
        }}
        />
        <Stack.Screen name="OpponentWordScreen" component={OpponentWordScreen} />
      </Stack.Navigator>

    </TimerProvider>
    </NavigationContainer>     
  );
}

