import axios from 'axios';

export const getTestData = async () => {
  try {
    const response = await axios.get('http://localhost:3333/api');
    return response.data;
  } catch (error) {
    console.log('Axios error: ', error);
  }
};
