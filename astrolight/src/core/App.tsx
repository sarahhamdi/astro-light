import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'

import Dashboard from './Dashboard'


const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <Dashboard />
      </SafeAreaView>
    </>
  )
}

export default App
