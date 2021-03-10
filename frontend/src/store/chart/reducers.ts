import { AnyAction } from 'redux';

import { ADD_TO_CHART } from './types';
import { AppState } from '../reducer';
import { ChartData } from '../../typings';

const initialState: ChartData[] = [];

const chartItemsReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ADD_TO_CHART:
      return [...state, action.payload];
  }
  return state;
};

export const getChartData = (state: AppState) => state.chart;

export default chartItemsReducer;
