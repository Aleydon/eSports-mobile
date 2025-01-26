import { Text, View, type ViewProps } from 'react-native';

interface headingProps extends ViewProps {
  title: string;
  subTitle: string;
}

export default function Heading({ title, subTitle, ...props }: headingProps) {
  return (
    <View className="w-full p-8" {...props}>
      <Text className="text-white font-bold text-2xl">{title}</Text>
      <Text className="text-caption_400 text-xl font-regular">{subTitle}</Text>
    </View>
  );
}
