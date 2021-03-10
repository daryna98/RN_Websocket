import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome!</Text>
      <Text style={styles.subHeader}>
        This application communicates with the server in real-time using WebSocket protocol
      </Text>
      <Text style={styles.actionText}>
        Click the button below to view all received data displayed in a chart
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Chart')}>
        <Text style={styles.buttonText}>TO CHART</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
