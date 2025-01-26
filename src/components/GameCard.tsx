import { LinearGradient } from 'expo-linear-gradient';

import {
  TouchableOpacity,
  ImageBackground,
  type ImageSourcePropType,
  type TouchableOpacityProps,
  Text
} from 'react-native';

export interface GameCardProps {
  id: string;
  name: string;
  ads: string;
  cover: ImageSourcePropType;
}

interface Props extends TouchableOpacityProps {
  data: GameCardProps;
}

export default function GameCard({ data, ...props }: Props) {
  return (
    <TouchableOpacity className="mr-6" {...props}>
      <ImageBackground
        className="w-60 h-80 justify-end rounded-lg overflow-hidden"
        source={data.cover}
      >
        <LinearGradient
          className="w-full h-[120px] p-4 justify-end"
          colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.9)']}
        >
          <Text className="text-white font-bold text-base">{data.name}</Text>
          <Text className="text-caption_300 font-regular">{data.ads} Ads</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}
