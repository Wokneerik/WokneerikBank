import { View, Text, Pressable} from 'react-native'
import React, { FC } from 'react'
import { IOtherItem } from '../types'
import Icon from './Icon'
import tw from 'twrnc'
import { BOX_SHADOW } from '../../../../../styles'
import { handleTransfer } from '../../handleTransfer'
import { useAccounts } from '../../../home/accounts/useAccounts'

const CASH_CARD_NUMBER = '4445 2505 7203 2200 4525'

const OtherItem:FC<{item: IOtherItem}> = ({item}) => {
  const { accounts } = useAccounts()
  return (
    <Pressable style={{
      ...tw`ml-4 rounded-xl p-2 w-24 h-24 bg-white`,
      ...BOX_SHADOW
    }}
    onPress={handleTransfer.bind(this, accounts[0] , CASH_CARD_NUMBER)}
    >
        <Icon iconName={item.iconName} />
      <Text style={{...tw`text-xs`, marginTop: 6 }}>{item.title}</Text>
    </Pressable>
  )
}

export default OtherItem