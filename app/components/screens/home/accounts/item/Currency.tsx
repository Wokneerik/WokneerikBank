import { View, Text } from 'react-native'
import React, { FC } from 'react'
import {TypeCurrency} from '../types'
import tw from 'twrnc';
import { FontAwesome } from '@expo/vector-icons'



const Currency:FC<{currency: TypeCurrency}> = ({currency}) => {
  return (
    <View style={tw`rounded-full bg-blue-500 w-9 h-9 items-center justify-center`}>
      <View style={{...tw`w-5 h-5 rounded-full items-center justify-center`,
        backgroundColor: '#EDF4FE'
    }}>

        <FontAwesome 
        color='#488CF9' 
        size={13} 
        name={currency == 'EUR' ? 'euro' : 'usd'}
        
        />

      </View>
    </View>
  )
}

export default Currency