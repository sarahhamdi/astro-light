import React from 'react'
import { StyleSheet, Pressable } from 'react-native'

import { colors, theme } from '../../helpers/styles'

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
        borderWidth: selected ? 4 : 0
      }
    ]}
    onPress={onPress}
    android_ripple={{
      radius: 30,
      color: '#123',
      borderless: false
    }}
  />
)

const styles = StyleSheet.create({
  swatch: {
    borderRadius: theme.borderRadiusSmall,
    height: 90,
    marginVertical: 4,
    width: '23%',
    borderColor: 'rgba(45, 50, 59, 1.00)'
  }
})

export default Swatch
