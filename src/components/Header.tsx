import { View, Text, StyleSheet } from "react-native";

export function Header(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                Calculadora de BTUs
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
    },
    title:{
        color: '#5E5E5E',
        textAlign: 'center',
        fontSize: 24,
        fontWeight: '600',
    }
});