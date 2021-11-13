import React from 'react';
import { Text, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'ui/router/Router';
import Button from 'ui/components/inputs/Button/Button';

type NavigationProp = StackNavigationProp<RootStackParamList, 'Index'>;

interface IndexProp {
  navigation: NavigationProp;
}

const Index: React.FC<IndexProp> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Button
        mode={'contained'}
        onPress={() => navigation.navigate('FindProfessionals')}
      >
        Encontrar Diarista
      </Button>
    </View>
  );
};

export default Index;
