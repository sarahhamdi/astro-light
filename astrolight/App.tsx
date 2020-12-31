/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Pressable,
  Text,
  StatusBar,
  Switch,
  FlatList
} from 'react-native'

import { colors } from './src/styles'
import { ASTRO_URL, apiReq } from './src/api'

interface Swatch {
  color: string
}

const swatches: Swatch[] = [
  {
    color: colors.brand
  },
  {
    color: colors.brand
  },
  {
    color: colors.brand
  },
  {
    color: colors.brand
  },
  {
    color: colors.brand
  },
  {
    color: colors.brand
  },
  {
    color: colors.brand
  },
  {
    color: colors.brand
  }
]

const App = () => {
  const lightOn = () => {
    apiReq(ASTRO_URL, 'POST', { effect: 'noise' })
      .then((data) => console.warn(data))
      .catch((error) => console.warn(error))
  }

  const lightOff = () => {
    apiReq(ASTRO_URL, 'POST', { effect: 'off' })
      .then((data) => console.warn(data))
      .catch((error) => console.warn(error))
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Text style={styles.headline}>Astro Light</Text>
          <Pressable
            style={[styles.button, styles.buttonOn]}
            onPress={lightOn}
            android_ripple={{ radius: 30, color: '#123', borderless: false }}>
            <Text style={[styles.buttonText]}>Turn me on!</Text>
          </Pressable>
          <Pressable
            style={[styles.button, styles.buttonOff]}
            onPress={lightOff}
            android_ripple={{ radius: 30, color: '#123', borderless: false }}>
            <Text style={[styles.buttonText, styles.buttonOffText]}>
              Turn me off!
            </Text>
          </Pressable>
          <View style={styles.swatchContainer}>
            {swatches.map((swatch) => (
              <Pressable
                style={styles.swatch}
                onPress={() => console.warn('purple')}
                android_ripple={{
                  radius: 30,
                  color: '#123',
                  borderless: false
                }}
              />
            ))}
          </View>
          <View style={styles.switchContainer}>
            <Text style={styles.display}>Split Horns</Text>
            <Switch
              trackColor={{ false: '#767577', true: colors.brand }}
              thumbColor={true ? '#fff' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => console.warn('switch!')}
              value={true}
            />
          </View>
          <View style={styles.switchContainer}>
            <Text style={styles.display}>Brightness</Text>
            <Switch
              trackColor={{ false: '#767577', true: colors.brand }}
              thumbColor={true ? '#fff' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => console.warn('switch!')}
              value={true}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#fff',
    height: '100%',
    paddingHorizontal: 16,
    paddingVertical: 28
  },
  headline: {
    color: 'rgba(45, 50, 59, 1.00)',
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 24,
    textAlign: 'center'
  },
  display: {
    color: colors.brand,
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 24
  },
  button: {
    alignItems: 'center',
    borderRadius: 30,
    marginTop: 16,
    paddingHorizontal: 24,
    paddingVertical: 16
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '700'
  },
  buttonOffText: {
    color: colors.brand
  },
  buttonOn: {
    backgroundColor: 'rgba(255, 141, 0, 1.00)'
  },
  buttonOff: {
    borderColor: colors.brand,
    borderWidth: 2
  },
  swatchContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginVertical: 24,
    marginBottom: 32
  },
  swatch: {
    backgroundColor: colors.brand,
    borderRadius: 16,
    height: 90,
    marginVertical: 4,
    width: '23%'
  },
  switchContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  }
})

export default App
