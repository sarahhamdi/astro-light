import React from 'react'
import { StyleSheet, Pressable, View } from 'react-native'

import { colors, theme } from '../../helpers/styles'
import Text from '../Text'

interface Button {
  text: string
  onPress: () => void
}

interface Props {
  options: Button[]
}

const ButtonGroup = ({ options }: Props) => {
  return (
    <View style={styles.buttonGroup}>
      {options.map(({ text, onPress }, i) => (
        <Pressable
          key={i}
          onPress={onPress}
          style={[
            styles.button,
            {
              borderRightWidth: i === options.length - 1 ? 0 : 1,
              // backgroundColor: colors.black,
            }
          ]}>
          <Text style={styles.text}>
            {text}
          </Text>
        </Pressable>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  buttonGroup: {
    alignItems: 'center',
    borderRadius: theme.borderRadius,
    marginTop: 16,
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    ...theme.boxShadow
  },
  button: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderColor: colors.grey,
    flex: 1
  },
  active: {
    backgroundColor: colors.black,
    ...theme.boxShadow
  },
  text: {
    fontSize: 18,
    textAlign: 'center'
  },
  activeText: {
    color: colors.white
  }
})

export default ButtonGroup
