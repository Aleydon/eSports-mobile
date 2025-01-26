import { Image, View, FlatList } from 'react-native';

import Logo from '@assets/logo-nlw-esports.png';
import Heading from '@components/Heading';
import GameCard from '@components/GameCard';

import { GAMES } from '@utils/games';

export default function Home() {
  return (
    <View className="flex-1 items-center">
      <Image className="mb-12 mt-[74px]" source={Logo} />
      <Heading
        title="Find your duo!"
        subTitle="Select the game you want to play..."
      />

      <FlatList
        className="flex-1"
        data={GAMES}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <GameCard data={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingLeft: 32, paddingRight: 64 }}
      />
    </View>
  );
}
