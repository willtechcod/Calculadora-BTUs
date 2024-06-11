import { View, 
    Text, 
    StyleSheet,
    TouchableOpacity,
} from "react-native";

import Manha from "../assets/morning.svg";
import Tarde from "../assets/sol.svg";
import Ambos from "../assets/ambos.svg";
import Neutro from "../assets/nuven.svg";
import { useState } from "react";



export function ButtonAction({onPress}){
    const [count, setCount] = useState<number>(0);


    return(
        <View style={styles.container}>
                <View style={styles.content}>
                    <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.button}
                    onPress={onPress}
                    >
                        <Text style={styles.title}>Manha</Text>
                        <Manha/>
                    </TouchableOpacity>

                    <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.button}
                    onPress={onPress}
                    >
                        <Text style={styles.title}>Tarde</Text>
                        <Tarde/>
                    </TouchableOpacity>

                    <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.button}
                    onPress={onPress}
                    >
                        <Text style={styles.title}>Ambos</Text>
                        <Ambos/>
                    </TouchableOpacity>
                    
                    <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.button}
                    onPress={onPress}
                    >
                        <Text style={styles.title}>Sem exposição solar</Text>
                        <Neutro/>
                    </TouchableOpacity>
                </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width: '95%',
    },
    content:{
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button:{
        width: 310,
        height: 56,
        borderWidth:1,
        borderColor: "#2B5B96",
        backgroundColor: "#F0F0F0",
        borderRadius: 12,
        display: 'flex',
        flexDirection: 'row',
        padding: 18,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 8,
    },
    title:{
        fontSize: 15,
        fontStyle: 'normal',
        fontWeight: '700',
    }
});