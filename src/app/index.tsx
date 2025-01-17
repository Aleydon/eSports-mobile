import { View } from 'react-native';

import { TextComponent } from '@src/components/Text';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center h-screen w-max">
      <TextComponent>Hello World</TextComponent>
    </View>
  );
}
