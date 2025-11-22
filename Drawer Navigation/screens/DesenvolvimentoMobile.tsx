import { Text, View } from 'react-native';

export default function DesenvolvimentoMobileScreens() {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 10 }}>
        Desenvolvimento Mobile
      </Text>

      <Text style={{ fontSize: 16, lineHeight: 22, textAlign: 'justify' }}>
        React Native é um framework criado pela Meta que permite desenvolver
        aplicativos móveis usando JavaScript e React. Ele possibilita que o
        programador escreva o código apenas uma vez e rode tanto em Android
        quanto em iOS, graças aos componentes nativos.
        {"\n\n"}
        Uma das grandes vantagens do React Native é o desenvolvimento rápido,
        suporte da comunidade e a facilidade de integrar recursos nativos do
        celular, como câmera, GPS e sensores.
      </Text>
    </View>
  );
}
