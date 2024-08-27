import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const App = () => {
  const [numero, setNumero] = useState(null);

  const sortearNumero = () => {
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    setNumero(numeroAleatorio);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sorteio de Números</Text>
      
      {/* Botão para sortear um número */}
      <Button title="Sortear Número" onPress={sortearNumero} />
      
      {/* Exibindo o número sorteado */}
      {numero !== null && <Text style={styles.result}>{numero}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  result: {
    fontSize: 32,
    marginTop: 20,
  },
});

export default App;
