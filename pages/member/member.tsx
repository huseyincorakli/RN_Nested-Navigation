import React, { FC, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const MemberComponent: FC = (props:any) => {

  return (
      <View style={styles.container}>
        <Text> MemberComponent works!</Text>
        <Button title ="go to detail" onPress={()=>{
          props.navigation.navigate('MemberDetailScreen',{
            id:1,
            name:"test"
          })
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

export default MemberComponent;