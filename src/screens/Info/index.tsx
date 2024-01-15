import { Text, TouchableOpacity, View } from 'react-native';
import { Header } from '../../components/Header';

export function Info() {
 return (
   <View>
      <Header/>
        <View>
            <Text>
                Você sabia que a potência do seu ar condicionado pode variar de acordo com o número de BTUs? Em outras palavras, quanto maior for o número de BTUs de um aparelho, maior será a capacidade de refrigeração do equipamento.
              </Text>
                <Text>
                    Mas antes de sair comprando o ar condicionado com o BTU mais elevado, é importante saberque existe um modelo mais adequado para cada tipo de ambiente.
                </Text>
              <Text>
                Para quartos e salas menores, por exemplo, é possível utilizar aparelhos de ar condicionado de até 10 mil BTUs.Locais mais amplos, como salas de aula, lojas ou auditórios, precisam de aparelhos mais potentes.
            </Text>
        </View>
          <TouchableOpacity>
            <Text>Iniciar</Text>
          </TouchableOpacity>
   </View>
  );
}