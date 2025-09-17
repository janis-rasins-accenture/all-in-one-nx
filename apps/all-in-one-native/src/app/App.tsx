import { StandardButton } from '@all-in-one-nx/buttons-native';
import React from 'react';
import { SafeAreaView, View, StatusBar, Text } from 'react-native';
import { getTestData } from '../api/get-test-data';

export const App = () => {
  const [data, setData] = React.useState('');
  const handlePress = () => {
    getTestData()
      .then((response) => {
        setData(JSON.stringify(response));
      })
      .catch((error) => {
        console.log('Get data error', error);
      });
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <View style={{ padding: 24, alignItems: 'center' }}>
          <StandardButton label="Load test data" onPress={handlePress} />
        </View>
        <View style={{ padding: 24 }}>
          <Text>{data}</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
