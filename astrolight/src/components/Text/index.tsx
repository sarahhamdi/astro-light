import React from 'react'
import { colors, theme } from '../../helpers/styles'
import { StyleSheet, Text, View } from 'react-native'

interface Props {
  bold?: boolean
  style?: {}
  children: any
}

const AstroText = ({ bold, children, style, ...rest }: Props) => (
  <Text style={[styles.text, bold && styles.bold, style]} {...rest}>
    {children}
  </Text>
)

const styles = StyleSheet.create({
  text: {
    color: colors.black,
    fontFamily: theme.fontFamily.ios
  },
  bold: {
    fontWeight: '700'
  }
})

export default AstroText
