import React, { FC, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ProfileComponent: FC = (props) => {
  const [state, setState] = useState<any>(0);

  return (
      <View style={styles.container}>
        <Text> ProfileComponent works!</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProfileComponent;