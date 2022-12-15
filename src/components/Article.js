import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'

export default function Article({ route }) {
  return (
    <View>
      <View>
        <Image source={{width: Dimensions.get('window').width, height: (Dimensions.get('window').width / 2), uri: route.params.img_url}} style={{padding: 20}}/>
      </View>
      <View>
        <Text style={{fontSize: 20}} >{route.params.text}</Text>
      </View>
      <View style={{top: 8}} >
        <Text style={{fontSize: 16}} >{route.params.full_text}</Text>
      </View>
    </View>
  )
}