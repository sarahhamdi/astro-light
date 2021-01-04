import React from 'react'
import { colors, theme } from '../../helpers/styles'
import { StyleSheet, Text, View } from 'react-native'

interface Props {
  text: string
  attrib: string
}

const Quotation = ({ text, attrib }: Props) => (
  <View style={styles.container}>
    <Text style={styles.text}>{text}</Text>
    <Text style={styles.attrib}>—{attrib}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 8,
    color: colors.black,
    fontFamily: theme.fontFamily.ios
  },
  attrib: {
    fontWeight: '700',
    color: colors.black,
    fontFamily: theme.fontFamily.ios
  }
})

export default Quotation
