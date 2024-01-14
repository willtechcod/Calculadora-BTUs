import { View, StyleSheet } from 'react-native';
import { ActivityIndicator } from 'react-native';

export function Loading() {
 return (
   <View style={styles.container}>
        <ActivityIndicator 
            size={28}
            color="#ffffff"
        />
   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        marginTop: 40,
        alignItems: 'center',
        justifyContent: 'center'
    }
})