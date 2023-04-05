import { View, Text, Alert } from 'react-native'
import React from 'react'
import Padding from '../../../ui/Padding'
import tw from 'twrnc';
import Button from '../../../ui/Button';
import { asyncAlert } from './asyncAlert';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useAuth } from '../../../../hooks/useAuth';
import { getRandomCardNumber } from '../../../../utils/getRandomCardNumber';
import { db } from "../../../../firebase"


const ApplyNewProduct = () => {

    const {user} = useAuth()
    const registerHandler = async() => {

        try {
          const currency = await asyncAlert({
            title: 'Currency',
            msg: 'Select account currency:',
            buttons: {
                text: 'EUR',
                resolveValue: 'EUR',
                textSecond: 'USD',
                resolveValueSecond: 'USD',
            },
          })

          const cardType = await asyncAlert({
            title: 'Curd type',
            msg: 'Select curd type:',
            buttons: {
                text: 'Black',
                resolveValue: 'Vokneerik Black',
                textSecond: 'Debit',
                resolveValueSecond: 'Vokneerik Debit',
            },
          })

          await addDoc(collection(db, 'accounts'),
          {
            timestamp: serverTimestamp(),
            userId: user?.uid,
            balance: 0,
            cardNumber: getRandomCardNumber(),
            currency,
            name: cardType,


          })
          
        } catch(error: any) {
            Alert.alert('Error apply new product', error.message)
        }
    }

  return (
    <Padding style={tw`mt-6`}>
      <Button onPress={registerHandler} title='Add New Card' />
    </Padding>
  )
}

export default ApplyNewProduct