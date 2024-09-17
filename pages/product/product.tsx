import React, { FC, useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

const ProductComponent: FC = ({ navigation }: any) => {
  const products = [
    { id: '1', name: 'product1', stock: 5 },
    { id: '2', name: 'product2', stock: 5 },
    { id: '3', name: 'product3', stock: 5 },
    { id: '4', name: 'product4', stock: 5 }
  ]
  const goProductEdit = (id: string) => {
    navigation.navigate('ProductEditScreen', { id })
  }

  return (
    <FlatList
      data={products}
      renderItem={({ item }:any) => (
        <ProductCard item={item} goProductEdit={goProductEdit}/>
      )}
    ></FlatList>
  )
}
const ProductCard =({item,goProductEdit}:any)=>{
  return(<View>
    <Text>{item.name}</Text>
    <Text>{item.stock}</Text>
    <Button
      title='EDİT'
      onPress={() => goProductEdit(item.id)}
    />
  </View>)
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default ProductComponent
