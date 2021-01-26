import React from 'react'
import { StyleSheet, Text } from 'react-native'

import { colors, theme } from 'helpers/styles'

interface Props {
  bold?: boolean
  center?: boolean
  children: any
  right?: boolean
  style?: {}
}

const AstroText = ({
  bold,
  center,
  children,
  right,
  style,
  ...rest
}: Props) => (
  <Text
    style={[
      styles.text,
      bold && styles.bold,
      center && styles.center,
      right && styles.right,
      style
    ]}
    {...rest}>
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
  },
  right: {
    textAlign: 'right'
  },
  center: {
    textAlign: 'center'
  }
})

export default AstroText
