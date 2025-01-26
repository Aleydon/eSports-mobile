import { Image, View } from 'react-native';

import Logo from '@assets/logo-nlw-esports.png';
import Heading from '@components/Heading';

export default function Home() {
  return (
    <View className="flex-1 items-center">
      <Image className="mb-12 mt-[74px]" source={Logo} />
      <Heading
        title="Find your duo!"
        subTitle="Select the game you want to play..."
      />
    </View>
  );
}
