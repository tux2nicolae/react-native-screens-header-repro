import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Button } from '@react-navigation/elements';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

function HomeScreen() {
  const navigation = useNavigation<any>();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>

      <Button onPress={() => navigation.navigate('Second')}>
        Go to Details
      </Button>
    </View>
  );
}

function SecondScreen() {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Second Screen</Text>
      </View>
    </>
  );
}

const RootStack = createNativeStackNavigator();

function RootStackNavigator() {
  return (
    <RootStack.Navigator   
      initialRouteName="Home"
      screenOptions={{
        headerShown: true,
        animation: 'slide_from_right',
      }}>
      <RootStack.Screen name="Home" component={HomeScreen} />
      <RootStack.Screen name="Second" component={SecondScreen} />
    </RootStack.Navigator>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <NavigationContainer>
        <RootStackNavigator />
      </NavigationContainer>
    </>
  );
}
export default App;
