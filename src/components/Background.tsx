import { ImageBackground } from 'react-native';

import background from '../assets/background-galaxy.png';

interface backgroundProps {
  children: React.ReactNode;
}

export default function Background({ children }: backgroundProps) {
  return (
    <ImageBackground
      className="flex justify-center items-center h-screen w-full bg-BACKGROUND_900"
      source={background}
      defaultSource={background}
    >
      {children}
    </ImageBackground>
  );
}
