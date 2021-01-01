import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { theme } from '../../helpers/styles'

const copy = {
  toast: {
    text: `Can't connect to the astro light!`,
    close: 'Dismiss'
  }
}

interface Props {
  onPress: () => void
}

const Toast = ({ onPress }: Props) => (
  <View style={styles.toastContainer}>
    <Text style={styles.toastText}>{copy.toast.text}</Text>
    <Text style={styles.toastClose} onPress={onPress}>
      {copy.toast.close}
    </Text>
  </View>
)

const styles = StyleSheet.create({
  toastContainer: {
    backgroundColor: 'rgba(255, 105, 101, 1.00)',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: theme.borderRadius,
    position: 'absolute',
    bottom: 20,
    right: 0,
    left: 0,
    margin: 16,
    zIndex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  toastText: {
    color: '#fff',
    fontSize: 16
  },
  toastClose: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
})

export default Toast
