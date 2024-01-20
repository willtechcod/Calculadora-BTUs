import { useState } from 'react';
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native';

export function InputArea({placeholder}) {
    const [count, setCount] = useState<number>(0);

    function handlePlus(){
        setCount(count + 0.5)
    }
   
    function handleMinus(){
      if(count >0){
        setCount(count - 0.5)
      }
    }

 return (
    <View style={styles.inputArea}>
    <View style={styles.inputAreaButton}>
      
      <View style={styles.inputAreaText}>
        <Text style={styles.inputAreaButtonText}>{placeholder}</Text>
      </View>
      <Text>{count}</Text>

      <TouchableOpacity 
      style={styles.inputAreaButtonMinus}
      onPress={handleMinus}
      >
        <Text>-</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      style={styles.inputAreaButtonAdd}
      onPress={handlePlus}
      >
      <Text>+</Text>
      </TouchableOpacity>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FCFCFD',
    },
    header:{
        marginTop: 60,
        marginBottom: 50
    },
    content:{
        width: '90%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'row'
    },
    infoArea:{
        padding: 4,
        width: '80%'
    },
    infoAreaTitle:{
        color: '#1d1d2e',
        fontSize: 24,
        fontStyle: 'normal',
        fontWeight: '600'
    },
    infoAreaSubTitle:{
        color: '#1d1d2e',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '500'
    },
    inputArea:{
        width: '90%',
        height: 56,
        marginTop: 38,
        backgroundColor: '#F0F0F0',
        borderRadius: 4,
        justifyContent: 'center'
    },
    inputAreaText:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputAreaButton:{
        display: 'flex',
        flexDirection: 'row',
        gap: 8,
        justifyContent: 'space-around'
    },
    inputAreaButtonText:{
        fontSize: 15,
        fontWeight: '700',
        fontStyle: 'normal'
    },
    inputAreaButtonAdd:{
        width: 42,
        height: 33,
        flexShrink: 0,
        borderRadius: 5,
        backgroundColor: '#E6E5E5',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputAreaButtonMinus:{
        width: 42,
        height: 33,
        flexShrink: 0,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    subTitle:{
        fontSize: 14,
        fontWeight: '500',
        color: '#1d1d2e',
        fontStyle: 'normal',
        lineHeight: 16,
        flexShrink: 0,
        alignSelf: 'stretch',
        marginBottom: 10
    },
    button:{
        width: 304,
        height: 50,
        flexShrink: 0,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2B5B96',
        marginTop: 50
    },
    buttonText:{
        fontSize: 18,
        fontWeight: '600',
        color: '#ffffff',
        textTransform: 'uppercase',
        fontStyle: 'normal',
    }
});