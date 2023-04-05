import { View, Text, Pressable, Linking } from 'react-native'
import React, { FC } from 'react'
import tw from 'twrnc'
import { BOX_SHADOW } from '../../../../styles'
import { IMoreItem } from './types'
import { MaterialIcons } from '@expo/vector-icons'

const MenuItem:FC<{item: IMoreItem}> = ({item}) => {
  return (
    <Pressable style={{...tw`mt-5 flex-row bg-white p-4 rounded-2xl justify-between`,
    ...BOX_SHADOW,
    }}
    onPress={() => Linking.openURL(item.link)}
    >
        <View style={tw`w-10/12`}> 
            <Text style={tw`text-lg text-gray-800 font-bold`}>{item.title}</Text>
            <Text style={{...tw`mt-2 text-gray-500 opacity-90`, fontSize: 13}}>{item.description}</Text>
        </View>
        <View style={tw`rounded-full bg-blue-500 w-10 h-10 items-center justify-center`}>
            <MaterialIcons name={item.iconName} size={22} color='#EDF4FE' />
        </View>

    </Pressable>
  )
}

export default MenuItem