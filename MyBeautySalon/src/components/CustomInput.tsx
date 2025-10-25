import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Button, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";

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
        <View>
            //inputContainer
            <View>
                <MaterialIcons name={icon as any} size={20} color="#000000" />
                <TextInput 
                placeholder={placeholder}
                value={value}
                onChangeText={onChange}
                onBlur={()=>{}}
                secureTextEntry={isSecureText}
                />
                
                <TouchableOpacity
                    onPress={
                        ()=>{
                            SetIsSecureText(isSecureText);
                        }
                    }
                >
                    <Text>Icon Button</Text>
                    <Ionicons name={isSecureText ? 'eye' : 'eye-off'} size={22} />
                </TouchableOpacity>
            </View>
        </View>
        
    )
}