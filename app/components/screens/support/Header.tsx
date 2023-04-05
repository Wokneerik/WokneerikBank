import React, { FC } from 'react'
import { Image, Text, View } from 'react-native'
import tw from 'twrnc'


const Header: FC = () => {
  return (
    <View style={tw`flex-row items-center py-1 mb-2 -mt-4`}>
      <Image source={require('../../../../assets/logo.png')}

        style={tw`mr-2 w-15 h-15 rounded-full`}
      />
      <View>
        <Text style={tw`text-sm text-gray-800 font-medium`}>Support</Text>
        <Text style={tw`text-xs text-gray-500 `}>We are there 24/4</Text>
      </View>

    </View>
  )
}

export default Header