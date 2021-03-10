import { ADD_TO_CHART } from './types';

export const setChartData = (payload: number) => ({ type: ADD_TO_CHART, payload });
