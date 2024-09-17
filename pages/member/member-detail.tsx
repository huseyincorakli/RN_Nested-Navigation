import React, { FC, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const MemberDetailComponent: FC = (props:any) => {
  const {id,name} = props.route.params
  return (
      <View style={styles.container}>
        <Text> MemberDetailComponent works!</Text>
        <Text>{id}</Text>
        <Text>{name}</Text>
        <Button title="go to edit" onPress={()=>{
          props.navigation.navigate('MemberEditScreen',{id})
        }}/>
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

export default MemberDetailComponent;