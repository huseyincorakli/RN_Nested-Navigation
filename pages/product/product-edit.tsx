import React, { FC, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ProductEditComponent: FC = ({route}:any) => {
  const id = route.params.id;
  return (
      <View style={styles.container}>
        <Text> ProductEditComponent works with {id}!</Text>
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

export default ProductEditComponent;