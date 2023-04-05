import React, { FC } from 'react';
import { View } from 'react-native';
import tw from 'twrnc';
import { IAccount } from '../types';
import Balance from './Balance';
import Currency from './Currency';
import ImageCard from './ImageCard';


const AccountItem: FC<{ account: IAccount }> = ({ account }) => {
  return (
    <View style={tw`flex-row items-center justify-between mb-5 mr-8`}>
      <Currency currency={account.currency} />
      <Balance account={account} />
      <ImageCard account={account} />
    </View>
  )
}

export default AccountItem