import { ActivityIndicator } from 'react-native';
import Background from './Background';

export default function Loading() {
  return (
    <Background>
      <ActivityIndicator color="#8B5CF6" size="large" />
    </Background>
  );
}
