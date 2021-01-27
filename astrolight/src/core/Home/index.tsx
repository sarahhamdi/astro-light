import React, { useState } from 'react'
import { StyleSheet, ScrollView, View, Switch, Image } from 'react-native'
import Slider from '@react-native-community/slider'

import { Button, ButtonGroup, Quotation, Swatch, Text } from 'components'

import { apiReq, ASTRO_URL } from 'helpers/api'
import { colors, swatches } from 'helpers/styles'
import { getColor } from 'helpers/colorFns'

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

const Home = ({ handleError }: Props) => {
  const [isLightOn, setIsLightOn] = useState<boolean>(true)
  const [isPulsing, setIsPulsing] = useState<boolean>(false)
  const [selectedColor, setSelectedColor] = useState<string>(
    'rgba(255, 238, 197, 1.00)'
  )

  const lightOn = () => {
    apiReq(ASTRO_URL, 'POST', { effect: 'noise' }, 'light on')
      .then(() => setIsLightOn(true))
      .catch(() => handleError())
  }

  const lightOff = () => {
    apiReq(ASTRO_URL, 'POST', { effect: 'off' }, 'light off')
      .then(() => setIsLightOn(false))
      .catch(() => handleError())
  }

  const adjustBrightness = (value: number) => {
    const brightness = Math.round(value)
    apiReq(
      ASTRO_URL,
      'POST',
      { effect: 'noise', brightness },
      'brightness'
    ).catch(() => handleError())
  }

  const changeColor = (swatch: string) => {
    const colour = getColor(swatch)
    apiReq(ASTRO_URL, 'POST', { effect: 'noise', colour }, 'change color')
      .then(() => setSelectedColor(swatch))
      .catch(() => handleError())
  }

  const setPulse = () => {
    const colour = getColor(selectedColor)

    if (isPulsing) {
      lightOn()
      setIsPulsing(false)
    } else {
      apiReq(
        ASTRO_URL,
        'POST',
        { effect: 'pulse', colour, b_pulse_l: 20, b_pulse_u: 255 },
        'set pulse'
      )
        .then(() => setIsPulsing(true))
        .catch(() => handleError())
    }
  }

  return (
    <>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <Text bold center style={styles.headline}>
          astrolight
        </Text>

        {!isLightOn && (
          <Quotation
            text={copy.dashboard.quotation}
            attrib={copy.dashboard.attrib}
          />
        )}

        {!isLightOn && (
          <Image source={require('./day-and-night.gif')} style={styles.image} />
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
                style={styles.slider}
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
                  { text: 'Pulse', onPress: setPulse, selected: isPulsing },
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
    marginBottom: 16
  },
  display: {
    fontSize: 18
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 32
  },
  image: {
    width: '100%',
    height: 430,
    alignSelf: 'center',
    marginBottom: 32
  },
  slider: { width: 200, height: 40 }
})

export default Home
