import React, { FC } from 'react';
import { ImageBackground, ImageSourcePropType, Text } from 'react-native';
import tw from 'twrnc';
import { IAccount } from '../types';

const ImageCard: FC<{ account: IAccount }> = ({
  account: { name, cardNumber },
}) => {



  const imageBlack: ImageSourcePropType = require('../../../../../../assets/black.png')
  const imageWhite: ImageSourcePropType = require('../../../../../../assets/white.png')




  return (
    <ImageBackground
      source={name === 'Vokneerik Debit' ? imageWhite : imageBlack}
      resizeMode='contain'
      style={{ ...tw` justify-end w-28 h-24 `, paddingBottom: 14, paddingLeft: 5, }}>
      <Text style={{ ...tw` ${name !== 'Vokneerik Debit' ? 'text-white' : 'text-black'} font-medium mb-1 `, fontSize: 11, }}>
        {cardNumber.slice(-4)}
      </Text>
    </ImageBackground>

  )
}

export default ImageCard