import { ActivityIndicator, View } from 'react-native';

export default function Loading() {
  return (
    <View className="flex justify-center items-center">
      <ActivityIndicator color="#8B5CF6" size="large" />;
    </View>
  );
}
