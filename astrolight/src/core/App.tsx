import React, { useState } from 'react'
import { SafeAreaView, StatusBar } from 'react-native'

import Home from './Home'
import Toast from '../components/Toast'

const App = () => {
  const [showToast, setShowToast] = useState<boolean>(false)
  const handleError = () => {
    console.error(`[ERROR] - Can't connect to astro light`)
    setShowToast(true)
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <Home handleError={handleError} />
        {showToast && <Toast onPress={() => setShowToast(false)} />}
      </SafeAreaView>
    </>
  )
}

export default App
