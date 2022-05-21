import axios from 'axios';

import { config } from './commons.queries';

export const getPlanets = async () => {
  const url = 'https://swapi.dev/api/planets';

  const { data } = await axios.get(url, config);

  return data;
};
