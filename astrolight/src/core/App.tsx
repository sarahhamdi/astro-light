import React, { useState } from 'react'
import { SafeAreaView, StatusBar } from 'react-native'

import Home from './Home'
import Toast from '../components/Toast'

const App = () => {
  const [showToast, setShowToast] = useState<boolean>(false)

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <Home handleError={() => setShowToast(true)}/>
        {showToast && <Toast onPress={() => setShowToast(false)} />}
      </SafeAreaView>
    </>
  )
}

export default App
