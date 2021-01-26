import React from 'react'
import { StyleSheet, Pressable } from 'react-native'

import { colors, theme } from 'helpers/styles'

interface Props {
  backgroundColor?: string
  onPress: () => void
  selected: boolean
}

const Swatch = ({
  backgroundColor = colors.brand,
  onPress,
  selected
}: Props) => (
  <Pressable
    style={[
      styles.swatch,
      {
        backgroundColor,
        borderWidth: selected ? 2 : 0
      }
    ]}
    onPress={onPress}
    android_ripple={{
      radius: 50,
      color: colors.black,
      borderless: false
    }}
  />
)

const styles = StyleSheet.create({
  swatch: {
    borderRadius: theme.borderRadius,
    height: 80,
    marginVertical: 8,
    width: '23%',
    borderColor: colors.black,
  }
})

export default Swatch
