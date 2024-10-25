import React from "react";
import { Text, ImageBackground, View, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import styles from "./style";

const Hero = ()=>{
    return (
        <ImageBackground style={styles.hero} source={{uri:'https://i.imgur.com/EJyDFeY.jpg'}}>
            <Image style={styles.logo} source={{uri:'https://imgur.com/DOnVxXo.png'}}
            resizeMethod="contain"/> 

            <View style={styles.containerTop10}>
                <Image 
                    style={styles.top10Bage} 
                    resizeMethod="contain"
                    source={require('../../assets/top11.png')
                }/>
                <Text style={styles.top10Text}>Top 1 de hoje no Brasil</Text>
            </View>

            <LinearGradient
                style={styles.gradient}
                colors={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']}
            />
        </ImageBackground>
    );
}
export default Hero;