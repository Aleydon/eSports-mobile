import { StatusBar, View } from 'react-native';

import {
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
  useFonts
} from '@expo-google-fonts/inter';

import Background from '@components/Background';
import Loading from '@components/Loading';
import Home from './home';

export default function App() {
  const [fontsIsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  });

  return (
    <View className="flex-1 items-center justify-center h-screen w-max">
      <Background>
        <StatusBar
          barStyle={'light-content'}
          backgroundColor={'transparent'}
          translucent
        />
        {!fontsIsLoaded ? <Home /> : <Loading />}
      </Background>
    </View>
  );
}
