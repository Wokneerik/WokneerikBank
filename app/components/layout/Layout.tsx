import { View, ScrollView } from 'react-native'
import React, { FC } from 'react'
import tw from 'twrnc';


interface ILayout {
    isScrollView?: boolean
    children: React.ReactNode
}

 
const Layout: FC<ILayout> = ({children, isScrollView = true}) => {
  
    
    
  return (
    <View style={tw`h-full w-full bg-white pt-16`}>
     {isScrollView ? <ScrollView>{children}</ScrollView> : children }  
    </View>
  )
  
}


export default Layout