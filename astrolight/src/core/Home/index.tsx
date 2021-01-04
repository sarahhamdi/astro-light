import React, { useState } from 'react'
import {
  StyleSheet,
  ScrollView,
  View,
  Switch,
  Image,
  ImageBackground
} from 'react-native'
import Slider from '@react-native-community/slider'

import { apiReq, ASTRO_URL } from '../../helpers/api'
import { colors, swatches, theme } from '../../helpers/styles'
import Button from '../../components/Button'
import Swatch from '../../components/Swatch'
import ButtonGroup from '../../components/ButtonGroup'
import Quotation from '../../components/Quotation'
import Text from '../../components/Text'

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
    brightness: 'Brightness',
    pulse: 'Pulse',
    sequence: 'Clockwise sequence',
    quotation: 'To light a candle is to cast a shadow.',
    attrib: 'Ursula K. Le Guin'
  }
}

interface Props {
  handleError: () => void
}

const Dashboard = ({ handleError }: Props) => {
  const [isLightOn, setIsLightOn] = useState<boolean>(false)
  const [selectedColor, setSelectedColor] = useState<string>(
    'rgba(255, 238, 197, 1.00)'
  )

  const lightOn = () => {
    apiReq(ASTRO_URL, 'POST', { effect: 'noise' })
      .then((data) => {
        setIsLightOn(true)
        console.warn(data.status)
      })
      .catch(() => {
        // TODO: remove this when connected
        setIsLightOn(true)
        handleError()
      })
  }

  const lightOff = () => {
    apiReq(ASTRO_URL, 'POST', { effect: 'off' })
      .then((data) => {
        setIsLightOn(false)
        console.warn(data.status)
      })
      .catch(() => {
        // TODO: remove this when connected
        setIsLightOn(false)
        handleError()
      })
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
        <Text bold style={styles.headline}>astrolight</Text>

        {!isLightOn && (
          <Quotation
            text={copy.dashboard.quotation}
            attrib={copy.dashboard.attrib}
          />
        )}

        {!isLightOn && (
          <Image
            source={require('./day-and-night.gif')}
            style={{
              width: '100%',
              height: 430,
              alignSelf: 'center',
              marginBottom: 32
            }}
          />
        )}

        {isLightOn && (
          <>
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
              <Text style={styles.display}>{copy.dashboard.brightness}</Text>
              <Slider
                style={{ width: 200, height: 40 }}
                minimumValue={0}
                maximumValue={50}
                minimumTrackTintColor={colors.black}
                maximumTrackTintColor={colors.grey}
                onSlidingComplete={adjustBrightness}
              />
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

            <View style={{ marginTop: 32 }}>
              <ButtonGroup
                options={[
                  { text: 'Pulse', onPress: () => console.warn('pulse!') },
                  { text: 'Clockwise', onPress: () => console.warn('clock!') }
                ]}
              />
            </View>

            <View style={{ marginTop: 24 }}>
              <Button onPress={lightOff} text={copy.dashboard.buttonOff} />
            </View>
          </>
        )}
        {!isLightOn && (
          <Button onPress={lightOn} text={copy.dashboard.buttonOn} />
        )}
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
    fontSize: 36,
    marginBottom: 16,
    textAlign: 'center',
  },
  display: {
    fontSize: 18,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 32
  }
})

export default Dashboard
