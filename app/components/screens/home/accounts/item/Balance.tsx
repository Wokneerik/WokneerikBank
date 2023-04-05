import "intl";
import "intl/locale-data/jsonp/en";
import React, { FC } from 'react';
import { Text, View } from 'react-native';
import tw from 'twrnc';
import { IAccount } from '../types';

const Balance: FC<{ account: IAccount }> = ({
  account: { balance, currency, name },
}) => {
  return (
    <View style={tw`w-8/12`}>
      <Text style={{ fontSize: 15, marginLeft: 5, }}>{name}</Text>
      <Text style={{
        ...tw`font-bold`,
        marginTop: 2,
        marginLeft: 5,
        fontSize: 15
      }}>
        {Intl.NumberFormat(undefined, {
          currency,
          style: 'currency',
        }).format(balance)}
      </Text>
    </View>
  )
}

export default Balance