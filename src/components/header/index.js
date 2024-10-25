import React from "react";
import {Text,TouchableOpacity,View, Image} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import styles from './style';

const Header = ()=>{
    return (
        <LinearGradient
        style={styles.header} colors={['rgba(0,0,0,1)','rgba(0,0,0,0)']}>
            <View style={styles.headerSafeAreaView}>
                <Image source={require('../../assets/logos_icon.png')}/>
                <TouchableOpacity>
                    <Text style={styles.textWhite}>Filme</Text> 
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.textWhite}>Novela</Text> 
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.textWhite}>Minha Lista</Text> 
                </TouchableOpacity> 
                <TouchableOpacity>
                    <Text style={styles.textWhite}>Series</Text> 
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
};

export default Header;