import { Text, View } from 'react-native';

export default function PortuguesScreens() {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 10 }}>
        Português
      </Text>

      <Text style={{ fontSize: 16, lineHeight: 22, textAlign: 'justify' }}>
        Na disciplina de Português desenvolvemos habilidades de leitura,
        interpretação e produção textual. Estudamos diferentes gêneros
        textuais, regras gramaticais e técnicas de escrita que ajudam a
        melhorar a comunicação, tanto na forma oral quanto escrita.
        {"\n\n"}
        A língua portuguesa é essencial para a clareza das ideias,
        argumentação e organização do pensamento. Dominar bem a língua
        facilita a compreensão de conteúdos em outras disciplinas e é
        fundamental para o sucesso acadêmico e profissional.
      </Text>
    </View>
  );
}
