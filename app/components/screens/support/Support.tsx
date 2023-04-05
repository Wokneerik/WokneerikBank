import React, { FC } from 'react'
import { KeyboardAvoidingView, ScrollView } from 'react-native'
import Layout from '../../layout/Layout'
import Padding from '../../ui/Padding'
import Field from './Field'
import Header from './Header'
import Message from './Message'
import { useMessages } from './useMessages'


const Support: FC = () => {

  const { messages } = useMessages()

  return (
    <Layout isScrollView={false}>
      <KeyboardAvoidingView behavior="height" keyboardVerticalOffset={50}>
      <Padding>
        <Header />
        <ScrollView style={{ height: '83%'}}>
          {messages.map(msg => <Message key={msg.text} message={msg} />)}
        </ScrollView>
        <Field />
      </Padding>
      </KeyboardAvoidingView>
    </Layout>
  )
}

export default Support