import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import Avatar from '../../ui/Avatar';
import Loader from '../../ui/Loader';
import Padding from '../../ui/Padding';
import { useProfile } from '../profile/useProfile';

const Header: FC = () => {
  const { isLoading, name } = useProfile()
  const { navigate } = useNavigation()

  return isLoading ? <Loader /> : (
    <Padding style={tw`flex-row items-center`}>
      <Avatar name={name} />
      <TouchableOpacity
        style={tw`flex-row items-end`}
        onPress={() => navigate('Profile')}>
        <Text
          style={tw`text-2xl text-gray-800 font-bold`}
        >{name}</Text>
        <Entypo
          name='chevron-small-right'
          size={28}
          style={tw`text-gray-800`}
        />


      </TouchableOpacity>
    </Padding>
  )
}

export default Header