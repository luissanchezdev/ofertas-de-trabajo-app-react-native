import React from 'react'
import { TouchableOpacity, Image } from 'react-native'

import styles from './screenheader.style'

const ScreenHeaderBtn = ({ iconUrl, dimension, headerPress }) => {
  return (
    <TouchableOpacity style={ styles.btnContainer } onPress={ headerPress }>
      <Image 
        source={ iconUrl }
        resizeMode='contain'
        style={ styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  )
}


export default ScreenHeaderBtn