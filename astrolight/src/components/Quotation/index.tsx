import React from 'react'
import { StyleSheet, View } from 'react-native'

import Text from 'components/Text'

interface Props {
  text: string
  attrib: string
}

const Quotation = ({ text, attrib }: Props) => (
  <View style={styles.container}>
    <Text style={styles.text}>{text}</Text>
    <Text bold>—{attrib}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  text: {
    fontSize: 18,
    marginBottom: 8
  }
})

export default Quotation
