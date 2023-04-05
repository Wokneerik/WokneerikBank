import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import SubHeading from '../../../ui/SubHeading'
import tw from 'twrnc'
import OtherItem from './item/OtherItem'
import { otherItems } from './data'

const Other = () => {
  return (
    <View>
        <SubHeading text='Import transfers' />
        <ScrollView
        style={tw`py-5`}
        showsHorizontalScrollIndicator={false}
        horizontal
        >
            {otherItems.map(item => (
               <OtherItem key={item.title} item={item} />
            ))}
        </ScrollView>
    </View>
  )
}

export default Other