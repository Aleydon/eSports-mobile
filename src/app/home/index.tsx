import { useEffect, useState } from 'react';
import { Image, View, FlatList } from 'react-native';

import { api } from '@services/axios';
import Logo from '@assets/logo-nlw-esports.png';
import Heading from '@components/Heading';
import GameCard, { type GameCardProps } from '@components/GameCard';

export default function Home() {
  const [games, setGames] = useState<GameCardProps[]>([]);

  useEffect(() => {
    async function fetchGames() {
      await api
        .get<GameCardProps[]>('/games')
        .then(res => res.data)
        .then(data => {
          setGames(data);
        })
        .catch(err => {
          console.warn('Error fetching games:', err);
        });
    }
    fetchGames();
  }, []);

  return (
    <View className="flex-1 items-center">
      <Image className="mb-12 mt-[74px]" source={Logo} />
      <Heading
        title="Find your duo!"
        subTitle="Select the game you want to play..."
      />

      <FlatList
        className="flex-1"
        data={games}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <GameCard data={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingLeft: 32, paddingRight: 64 }}
      />
    </View>
  );
}
