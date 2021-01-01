import React from 'react'
import { StyleSheet, Pressable, Text } from 'react-native'

import { colors } from '../../helpers/styles'

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
    borderRadius: 30,
    marginTop: 16,
    paddingHorizontal: 24,
    paddingVertical: 16
  },
  primary: {
    backgroundColor: 'rgba(255, 141, 0, 1.00)'
  },
  secondary: {
    borderColor: colors.brand,
    borderWidth: 4
  },
  text: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '700'
  },
  secondaryText: {
    color: colors.brand
  }
})

export default Button
