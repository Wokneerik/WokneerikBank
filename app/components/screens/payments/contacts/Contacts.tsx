import { View, Text, ScrollView } from 'react-native'
import React, { FC } from 'react'
import { useContacts } from './useContacts'
import tw from 'twrnc'
import SubHeading from '../../../ui/SubHeading'
import Loader from '../../../ui/Loader'
import ContactItem from './ContactItem'

const Contacts: FC = () => {
    const {contacts, isLoading} = useContacts()

  return (
    <View style={tw`my-8`}>
        <SubHeading text='Phone transfers' />
        {isLoading ? <Loader/> : <ScrollView
        style={tw`mt-5`}
        showsHorizontalScrollIndicator={false}
        horizontal
        >
            {contacts.map(c => (
                <ContactItem key={c._id} contact={c} />
            ))}

        </ScrollView>}
      
    </View>
  )
}

export default Contacts