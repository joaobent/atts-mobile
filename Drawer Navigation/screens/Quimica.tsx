import { Text, View } from 'react-native';

export default function QuímicaScreens() {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 10 }}>
        Química
      </Text>

      <Text style={{ fontSize: 16, lineHeight: 22, textAlign: 'justify' }}>
        A disciplina de Química é fundamental para compreender a composição,
        estrutura e transformações da matéria. Durante o semestre, estudamos
        desde conceitos básicos, como átomos e moléculas, até processos mais
        complexos envolvendo reações químicas e o comportamento das substâncias.
        {"\n\n"}
        A Química está diretamente ligada ao avanço da tecnologia, sendo aplicada
        em áreas como desenvolvimento de materiais, energia, medicina e meio
        ambiente. Por isso, o estudo da Química é essencial para formar profissionais
        capazes de entender e solucionar desafios reais por meio da ciência.
      </Text>
    </View>
  );
}
