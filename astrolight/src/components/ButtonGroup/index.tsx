import React from 'react'
import { StyleSheet, Pressable, View } from 'react-native'

import Text from 'components/Text'
import { colors, theme } from 'helpers/styles'

interface Button {
  text: string
  onPress: () => void
  selected?: boolean
}

interface Props {
  options: Button[]
}

const ButtonGroup = ({ options }: Props) => {
  return (
    <View style={styles.buttonGroup}>
      {options.map(({ text, onPress, selected }, i) => {
        const lastItem = i === options.length - 1
        return (
          <Pressable
            key={i}
            onPress={onPress}
            style={[
              styles.button,
              selected && styles.activeButton,
              selected && lastItem && styles.lastItemActive,
              selected && i === 0 && styles.firstItemActive,
              lastItem && styles.lastItem
            ]}>
            <Text center style={[styles.text, selected && styles.activeText]}>
              {text}
            </Text>
          </Pressable>
        )
      })}
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
    flex: 1,
    borderRightWidth: 1
  },
  text: {
    fontSize: 18,
    color: colors.black
  },
  activeButton: {
    backgroundColor: colors.black,
    ...theme.boxShadow
  },
  activeText: {
    color: colors.white
  },
  lastItem: {
    borderRightWidth: 0
  },
  firstItemActive: {
    borderTopLeftRadius: theme.borderRadius,
    borderBottomLeftRadius: theme.borderRadius
  },
  lastItemActive: {
    borderTopRightRadius: theme.borderRadius,
    borderBottomRightRadius: theme.borderRadius
  }
})

export default ButtonGroup
