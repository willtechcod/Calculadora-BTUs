import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { Header } from '../../components/Header';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

export function Info() {
  const navigation = useNavigation();

  function handleStart(){
    navigation.navigate("state")
  }

 return (
   <View style={styles.container}>
        <View style={styles.header}>
          <Header/>
        </View>
        <View style={styles.content}>
            <Text style={styles.subTitle}>
                Você sabia que a potência do seu ar condicionado pode variar de acordo com o número de BTUs? Em outras palavras, quanto maior for o número de BTUs de um aparelho, maior será a capacidade de refrigeração do equipamento.
              </Text>
                <Text style={styles.subTitle}>
                    Mas antes de sair comprando o ar condicionado com o BTU mais elevado, é importante saberque existe um modelo mais adequado para cada tipo de ambiente.
                </Text>
              <Text style={styles.subTitle}>
                Para quartos e salas menores, por exemplo, é possível utilizar aparelhos de ar condicionado de até 10 mil BTUs.Locais mais amplos, como salas de aula, lojas ou auditórios, precisam de aparelhos mais potentes.
            </Text>
        </View>
          <TouchableOpacity 
          activeOpacity={0.7} 
          style={styles.button}
          onPress={handleStart}
          >
            <Text style={styles.buttonText}>
              Iniciar
            </Text>
          </TouchableOpacity>
   </View>
  );
}