import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, FlatList } from 'react-native';
import { IMessageEvent, w3cwebsocket as W3CWebSocket } from 'websocket';

import { ChartElement } from '../../components';
import { setChartData } from '../../store/chart/actions';
import { getChartData } from '../../store/chart/reducers';

import styles from './styles';

const ChartTable: React.FC = () => {
  const dispatch = useDispatch();
  const chartItems = useSelector(getChartData);

  useEffect(() => {
    const client = new W3CWebSocket('ws://127.0.0.1:8080');

    client.onmessage = (message: IMessageEvent) => {
      if (typeof message.data === 'string') {
        const newData = JSON.parse(message.data);
        dispatch(setChartData(newData));
      }
    };
    return () => {
      client.close();
    };
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={chartItems}
        keyExtractor={(item, index) => `${index}-${item.value}`}
        renderItem={({ item, index }) => (
          <ChartElement date={item.date} value={item.value} isOdd={Boolean(index % 2)} />
        )}
      />
    </View>
  );
};

export default ChartTable;
