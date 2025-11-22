import { Text, View } from 'react-native';

export default function HomeScreens() {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 10 }}>
        Bem-vindo ao App das Disciplinas
      </Text>

      <Text style={{ fontSize: 16, lineHeight: 22, textAlign: 'justify' }}>
        Use o menu lateral para navegar entre as telas
      </Text>
    </View>
  );
}
