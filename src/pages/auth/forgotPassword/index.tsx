import React,{useState} from "react";
import {View,Text,TextInput,Button,StyleSheet,Alert} from "react-native";

const ForgotPassword:React.FC = ()=>{
    const [email,setEmail] = useState('');

    const handleResetPassword = async ()=>{
        Alert.alert('Password reset',`password reset email sent to ${email}`)
    }
    return(
        <View style={style.container}>
            <Text style={style.title}>Forgot Password</Text>
            <TextInput
                style={style.input}
                placeholder={"Enter your Email"}
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <Button title={"Next"} onPress={handleResetPassword}/>
        </View>
    )
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        padding:16,
    },
    title:{
        fontSize:30,
        marginBottom:16,
    },
    input:{
        height:50,
        width:'100%',
        borderColor:'gray',
        borderWidth:1,
        marginBottom:16,
        padding:8,
    }
})
export default ForgotPassword;