import { Text, View } from 'react-native';

export default function RedesScreens() {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 10 }}>
        Redes de Computadores
      </Text>

      <Text style={{ fontSize: 16, lineHeight: 22, textAlign: 'justify' }}>
        A disciplina de Redes aborda os conceitos essenciais para compreender o
        funcionamento da comunicação entre dispositivos. São estudados temas
        como protocolos de rede, topologias, endereçamento IP e funcionamento do
        modelo OSI.
        {"\n\n"}
        Entender redes é fundamental para garantir a segurança, desempenho e
        disponibilidade dos sistemas modernos de comunicação.
      </Text>
    </View>
  );
}
