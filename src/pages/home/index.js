import React from "react";
import {View,ScrollView,FlatList, TouchableOpacity, Image,} from "react-native";
import { Title, Button } from "react-native-paper";
import ButtonVertical from "../../components/ButtomVertical";
import LinearGradient from "react-native-linear-gradient";


import styles from "./style";
import Header from "../../components/header";
import Hero from "../../components/hero";
import Secao from "../../components/secao";


const Home = () => {
  const data = [1, 2, 3, 4, 5, 6];
  return (
    <ScrollView style={styles.container}>
      <Header />
      <Hero />

      <View style={styles.menuHeader}>
        <ButtonVertical icon="plus" text="Minha Lista" />
        <Button
          icon="play"
          mode="contained"
          buttonColor="#ffffff"
          textColor="#000"
        >
          Assistir
        </Button>
        <ButtonVertical icon="information-outline" text="Saiba Mais" />
      </View>

      <View style={styles.previaContainer}>
        <Title style={styles.previaTitle}>Prévias</Title>
        <FlatList
          horizontal
          style={styles.flatListContainer}
          data={data}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              key={index}
              style={{ marginLeft: index === 0 ? 20 : 0, marginRight: 10 }}
            >
              <View style={styles.oval}>
                <Image
                  style={styles.capa}
                  source={{ uri: "https://i.imgur.com/EJyDFeY.jpg" }}
                />

                <Image
                  resizeMode="contain"
                  style={styles.logo}
                  source={{ uri: "https://i.imgur.com/EJyDFeY.jg" }}
                />

                <LinearGradient
                  style={styles.gradient}
                  colors={["rgba(0,0,0,0)", "rgba(0,0,0,1)"]}
                />
              </View>
            </TouchableOpacity>
          )}
        />
      </View>

      {[1,2,3,4].map((secao, index)=>(
        <Secao hasTopBorder key={index}/>))}
    </ScrollView>
  );
};
export default Home;
