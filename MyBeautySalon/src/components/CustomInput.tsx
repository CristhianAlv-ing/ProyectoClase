import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Button, Text, TextInput, Touchable, TouchableOpacity, View, StyleSheet } from "react-native";

type Props = {
    type?: 'text' | 'email' | 'password' | 'number';
    value: string;
    placeholder: string;
    onChange: (text: string) => void;
    required? : boolean;
}
export default function CustomInput ({type = "text", required, value, placeholder, onChange} : Props){
    const [isSecureText, SetIsSecureText] = useState(type === "password");

    const icon = type === 'email' ? 'email' :
                    type === 'password' ? 'lock-closed-outline' : 'text-fields'
    return( 
        //wrapper
        <View style={styles.wrapper}>
            <View style ={styles.inputContainer}>
                <MaterialIcons name={icon as any} size={20} color="#000000" />
                <TextInput 
                placeholder={placeholder}
                value={value}
                onChangeText={onChange}
                onBlur={()=>{}}
                secureTextEntry={isSecureText}
                style={styles.input}
                />
                
                <TouchableOpacity
                    onPress={
                        ()=>{
                            SetIsSecureText(isSecureText);
                        }
                    }
                >
                    <Ionicons name={isSecureText ? 'eye' : 'eye-off'} size={22} />
                </TouchableOpacity>
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 15,
    },
    //Distribución de Componentes
    inputContainer: {
        flexDirection: 'row',
        
        //Estilización de Input
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 13,
        backgroundColor: '#f9f9f9',
        width:'80%',
    },
        input: {
            //Agregando espacio al componente input nativo
            paddingVertical: 10,
            paddingHorizontal: 15,
        }
})