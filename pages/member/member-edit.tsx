import React, { FC, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const MemberEditComponent: FC = (props:any) => {
    const {id} = props.route.params
  return (
      <View style={styles.container}>
        <Text>{id}</Text>
        <Text> MemberEditComponent works!</Text>
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

export default MemberEditComponent;