import { Text, TouchableHighlight } from 'react-native'
import React, { FC } from 'react'
import tw from 'twrnc';

interface IButton {
    onPress: () => void
    title: string
    colors?: [string, string]

}

const Button:FC<IButton> = ({onPress, title, colors = ['bg-yellow-300', '#FBBF24']}) => {
  return (
    <TouchableHighlight 
    onPress={onPress} 
    underlayColor={colors[1]}
    style={tw`${colors[0]} text-gray-800 rounded-xl w-full my-4 py-4`}
    >
        <Text style={tw`text-center`}>{title}</Text>
    </TouchableHighlight>
  )
}

export default Button