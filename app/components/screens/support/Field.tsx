import { MaterialCommunityIcons } from '@expo/vector-icons'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import React, { FC, useState } from 'react'
import { Alert, Keyboard, Pressable, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import tw from 'twrnc'
import { db } from '../../../firebase'
import { useAuth } from '../../../hooks/useAuth'


const Field: FC = () => {

  const { user } = useAuth()
  const [message, setMessage] = useState('')

  const handleSendMessage = async () => {
    try {
      await addDoc(collection(db, 'messages'),
        { timestamp: serverTimestamp(), userId: user?.uid, text: message })
    } catch (error: any) {
      Alert.alert('Err add new message: ', error.message)
    } finally {
      setMessage('')
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <View style={tw`flex-row items-center justify-between py-1`}>
      <TextInput
        placeholder='Enter your message'
        onChangeText={setMessage}
        value={message}
        showSoftInputOnFocus={true}
        autoCapitalize='none'
        style={tw`bg-gray-100 rounded-xl p-3 w-5/6 h-10 rounded-2xl`}
      />
      <Pressable onPress={handleSendMessage}>
        <MaterialCommunityIcons
          name='send-circle-outline'
          size={42}
          style={tw`text-blue-300`}
        />
      </Pressable>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default Field