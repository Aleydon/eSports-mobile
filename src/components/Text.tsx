import { Text } from 'react-native';

interface TextComponentProps {
  children: React.ReactNode;
}

export function TextComponent({ children }: TextComponentProps) {
  return <Text className="text-2xl underline">{children}</Text>;
}
