import _ from 'lodash'
import { StyleSheet } from 'react-native'

export const sharedStyles = StyleSheet.create({
  flex: {
    flex: 1,
  },

  flexGrow: {
    flex: 1,
  },

  flexWrap: {
    flexWrap: 'wrap',
  },

  horizontal: {
    flexDirection: 'row',
  },

  horizontalAndVerticallyAligned: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
})
