import React, { useEffect, useState } from 'react'
import { SafeAreaView, StatusBar } from 'react-native'

import Dashboard from './Dashboard'
import Toast from '../components/Toast'

const App = () => {
  const [showToast, setShowToast] = useState<boolean>(false)

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <Dashboard handleError={() => setShowToast(true)}/>
        {showToast && <Toast onPress={() => setShowToast(false)} />}
      </SafeAreaView>
    </>
  )
}

export default App
