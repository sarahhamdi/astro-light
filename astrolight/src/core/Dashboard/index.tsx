import React, { useEffect, useState } from 'react'
import {
  StyleSheet,
  ScrollView,
  View,
  Pressable,
  Text,
  Switch,
  RefreshControl
} from 'react-native'
import Slider from '@react-native-community/slider'

import { apiReq, ASTRO_URL } from '../../helpers/api'
import { colors } from '../../helpers/styles'

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

interface Colour {
  main: {
    dyn: {
      r: boolean
      b: boolean
      g: boolean
      w: boolean
    }
    stat: {
      r: number
      b: number
      g: number
      w: number
    }
  }
}

const colour: Colour = {
  main: {
    dyn: {
      r: true,
      b: true,
      g: true,
      w: true
    },
    stat: {
      r: 0,
      b: 65,
      g: 43,
      w: 0
    }
  }
}

const Dashboard = () => {
  const [error, setError] = useState<boolean>(false)

  // useEffect(() => {
  //   apiReq(ASTRO_URL, 'POST')
  //     .then((data) => console.warn(data.status))
  //     .catch((error) => setError(true))
  // })

  const onRefresh = () => {
    apiReq(ASTRO_URL, 'POST')
      .then((data) => console.warn(data.status))
      .catch((error) => setError(true))
  }

  const lightOn = () => {
    apiReq(ASTRO_URL, 'POST', { effect: 'noise' })
      .then((data) => console.warn(data.status))
      .catch((error) => console.warn(error))
  }

  const lightOff = () => {
    apiReq(ASTRO_URL, 'POST', { effect: 'off' })
      .then((data) => console.warn(data.status))
      .catch((error) => console.warn(error))
  }

  const adjustBrightness = (value: number) => {
    const brightness = Math.round(value)
    apiReq(ASTRO_URL, 'POST', { effect: 'noise', brightness })
      .then((data) => console.warn(data.status))
      .catch((error) => console.warn(error))
  }

  const changeColor = () => {
    apiReq(ASTRO_URL, 'POST', { effect: 'noise', colour })
      .then((data) => console.warn(data.status))
      .catch((error) => console.warn(error))
  }

  return (
    <>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={error} onRefresh={onRefresh} />
        }
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
          {swatches.map((swatch, i) => (
            <Pressable
              key={i}
              style={styles.swatch}
              onPress={changeColor}
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
          <Slider
            style={{ width: 200, height: 40 }}
            minimumValue={0}
            maximumValue={50}
            minimumTrackTintColor={colors.brand}
            maximumTrackTintColor="#767577"
            onSlidingComplete={adjustBrightness}
          />
        </View>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#fff',
    minHeight: '100%',
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
  // toastContainer: {
  //   backgroundColor: 'rgba(255, 105, 101, 1.00)',
  //   paddingVertical: 12,
  //   paddingHorizontal: 20,
  //   borderRadius: 8,
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   position: 'absolute',
  //   width: '100%',
  //   bottom: 0,
  //   zIndex: 1,
  // },
  // toast: {
  //   color: '#fff',
  //   fontSize: 16,
  // },
  // toastClose: {
  //   color: '#fff',
  //   fontSize: 16,
  //   fontWeight: 'bold',
  // }
})

export default Dashboard
