import { useState } from 'react'
import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import { Stack, useRouter } from 'expo-router'
import { SIZES, COLORS, icons, images } from '../constants'
import { ScreenHeaderBtn, Nearbyjobs, Popularjobs, Welcome } from '../components'

const App = () => {

  const router = useRouter()

  return (
    <SafeAreaView style={ { flex: 1, backgroundColor: COLORS.lightWhite } }>
      <Stack.Screen
        options={ {
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={ icons.menu } dimension = '60%' headerPress={() => console.log('ScreenHeaderBtn')} />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={ images.profile } dimension = '60%' />
          ),
          headerTitle: 'Empleos',
          headerTitleAlign: 'center'
        }}
      />
      <ScrollView showsVerticalScrollIndicator={ false }>
        <View
          style= { {
            flex: 1,
            padding: SIZES.medium
          } }
        >
          <Welcome />
          <Popularjobs />
          <Nearbyjobs />
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default App