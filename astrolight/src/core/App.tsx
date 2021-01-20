import React, { useState } from 'react'
import { SafeAreaView, StatusBar } from 'react-native'

import Home from './Home'
import Toast from '../components/Toast'

const copy = {
  app: {
    error: `[ERROR] - Can't connect to astro light`
  }
}

const App = () => {
  const [showToast, setShowToast] = useState<boolean>(false)

  const handleError = () => {
    console.error(copy.app.error)
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
