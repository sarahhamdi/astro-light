import React, { useEffect, useState } from 'react'
import { SafeAreaView, StatusBar } from 'react-native'

import Dashboard from './Dashboard'
import Toast from '../components/Toast'

const App = () => {
  const [showToast, setShowToast] = useState<boolean>(true)

  useEffect(() => {
    if (showToast) {
      setTimeout(() => setShowToast(false), 3000)
    }
  }, [showToast, setShowToast])

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <Dashboard />
        {showToast && <Toast onPress={() => setShowToast(false)}/>}
      </SafeAreaView>
    </>
  )
}

export default App
