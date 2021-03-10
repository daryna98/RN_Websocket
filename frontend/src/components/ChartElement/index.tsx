import React from 'react';
import { Text, View } from 'react-native';
import moment from 'moment';

import { ChartData } from '../../typings';

import styles from './styles';

const dateFormat = 'DD MMM YYYY HH:mm:ss';

const ChartElement: React.FC<ChartData> = ({ date, value, isOdd }: ChartData) => {
  return (
    <View style={styles.chartContainer}>
      <Text style={styles.chartDate}>{moment(date).format(dateFormat)}</Text>
      <View style={styles.chartRow}>
        <Text style={styles.chartNumber}>{value}</Text>
        <View
          style={{
            backgroundColor: isOdd ? 'lightblue' : 'lightgreen',
            width: `${value}%`,
            height: 40,
          }}
        />
      </View>
    </View>
  );
};

export default ChartElement;
