import React, { useState } from 'react'
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Switch,
  Image,
} from 'react-native'
import Slider from '@react-native-community/slider'

import { apiReq, ASTRO_URL } from '../../helpers/api'
import { colors, swatches } from '../../helpers/styles'
import Button from '../../components/Button'
import Swatch from '../../components/Swatch'

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

// save this cool colour!
const colour: Colour = {
  main: {
    dyn: {
      r: false,
      b: false,
      g: true,
      w: false
    },
    stat: {
      r: 255,
      b: 105,
      g: 101,
      w: 0
    }
  }
}

const copy = {
  dashboard: {
    buttonOn: 'Turn me on!',
    buttonOff: 'Turn me off!',
    split: 'Split Horns',
    brightness: 'Brightness'
  }
}

interface Props {
  handleError: () => void
}

const Dashboard = ({ handleError }: Props) => {
  const [selectedColor, setSelectedColor] = useState<string>(
    'rgba(255, 238, 197, 1.00)'
  )

  const lightOn = () => {
    apiReq(ASTRO_URL, 'POST', { effect: 'noise' })
      .then((data) => console.warn(data.status))
      .catch(() => handleError())
  }

  const lightOff = () => {
    apiReq(ASTRO_URL, 'POST', { effect: 'off' })
      .then((data) => console.warn(data.status))
      .catch(() => handleError())
  }

  const adjustBrightness = (value: number) => {
    const brightness = Math.round(value)
    apiReq(ASTRO_URL, 'POST', { effect: 'noise', brightness })
      .then((data) => console.warn(data.status))
      .catch(() => handleError())
  }

  const changeColor = (swatch: string) => {
    apiReq(ASTRO_URL, 'POST', { effect: 'noise', colour })
      .then((data) => {
        setSelectedColor(swatch)
        console.warn(data.status)
      })
      .catch(() => handleError())
  }

  return (
    <>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <Text style={styles.headline}>astrolight v1.0</Text>
        <Button onPress={lightOn} text={copy.dashboard.buttonOn} />
        <Button
          onPress={lightOff}
          text={copy.dashboard.buttonOff}
          type="secondary"
        />

        <View style={styles.row}>
          {swatches.map((swatch, i) => (
            <Swatch
              selected={selectedColor === swatch}
              key={i}
              onPress={() => changeColor(swatch)}
              backgroundColor={swatch}
            />
          ))}
        </View>

        <View style={styles.row}>
          <Text style={styles.display}>{copy.dashboard.split}</Text>
          <Switch
            trackColor={{ false: '#767577', true: colors.black }}
            thumbColor={true ? '#fff' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => console.warn('switch!')}
            value={true}
          />
        </View>

        <View style={styles.row}>
          <Text style={styles.display}>{copy.dashboard.brightness}</Text>
          <Slider
            style={{ width: 200, height: 40 }}
            minimumValue={0}
            maximumValue={50}
            minimumTrackTintColor={colors.black}
            maximumTrackTintColor="#dfdfdf"
            onSlidingComplete={adjustBrightness}
          />
        </View>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: colors.white,
    minHeight: '100%',
    paddingHorizontal: 24,
    paddingVertical: 16
  },
  headline: {
    color: colors.black,
    fontSize: 32,
    marginBottom: 16,
  },
  display: {
    color: colors.black,
    fontSize: 18,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 32,
  }
})

export default Dashboard
