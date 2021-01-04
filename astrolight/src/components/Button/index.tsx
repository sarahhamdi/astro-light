import React from 'react'
import { StyleSheet, Pressable, Text } from 'react-native'

import { colors, theme } from '../../helpers/styles'

interface Props {
  onPress: () => void
  text: string
  type?: 'primary' | 'secondary'
}

const Button = ({ type = 'primary', onPress, text }: Props) => {
  return (
    <Pressable
      style={[styles.button, styles[type]]}
      onPress={onPress}
      android_ripple={{ radius: 30, color: '#123', borderless: false }}>
      <Text style={[styles.text, styles[`${type}Text`]]}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: theme.borderRadius,
    marginTop: 16,
    paddingHorizontal: 24,
    paddingVertical: 16
  },
  primary: {
    backgroundColor: colors.black,
    ...theme.boxShadow
  },
  secondary: {
    backgroundColor: colors.white,
    ...theme.boxShadow
  },
  text: {
    color: colors.white,
    fontSize: 18,
  },
  secondaryText: {
    color: colors.black
  }
})

export default Button
