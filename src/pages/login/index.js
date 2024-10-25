import React, { useState } from "react";
import { Image, Text, View } from "react-native";
import { TextInput, Button } from "react-native-paper";

import styles from "./styles";

const Login = () => {
  const [credenciais, setCredenciais] = useState({
    email: "",
    senha: "",
  });

  return (
    <View style={styles.bgDark}>
      <Image style={styles.logo} source={require("../../assets/logo.png")} />

      <TextInput
        mode="flat"
        label="Email ou número de telefone"
        style={styles.marginBottom}
        value={credenciais.email}
        onChangeText={(text) => setCredenciais({ ...credenciais, email: text })}
      />

      <TextInput
        mode="flat"
        label="Senha"
        style={styles.marginBottom}
        secureTextEntry
        value={credenciais.senha}
        onChangeText={(text) => setCredenciais({ ...credenciais, senha: text })}
      />

      <Button
        mode="contained"
        style={styles.marginBottom}
        onPress={() => console.log("Pressed")}
      >
        Entrar
      </Button>

      <Button
        style={styles.marginBottom}
        onPress={() => console.log("Pressed")}
        theme={{colors:{primary:"#fff"}}}
      >
        Recuperar senha
      </Button>

      <Text style={styles.textSmall}>
        O acesso está protegido pelo google reCaptcha para garantir que voce não
        é um robo. SAíba mais.
      </Text>
    </View>
  );
};

export default Login;
