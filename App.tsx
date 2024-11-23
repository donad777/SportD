import { Image, StyleSheet } from 'react-native'
import React from 'react'
import AppNavigation from './Screens/Navigation/AppNavigation';


import { Provider } from 'react-redux';
import { store, persistor } from './Screens/rtk/Store';
import { PersistGate } from 'redux-persist/integration/react'

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppNavigation />
      </PersistGate>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})