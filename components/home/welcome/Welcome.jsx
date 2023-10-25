import { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList

} from 'react-native'

import { useRouter } from 'expo-router'

import styles from './welcome.style'

import { icons, SIZES } from '../../../constants'

const Welcome = ({ search, setSearch, handleClick }) => {
  const [activeJobType, setActiveJobType] = useState('Full-Time')
  const router = useRouter()



  const jobsTypes = ['Full-Time', 'Part-Time', 'Internship', 'Entry Level', 'Contract-Based']
  return (
    <View>
      <View style={styles.container}>

        <Text style={styles.userName}>
          Muhammad Uzair
        </Text>

        <Text style={styles.welcomeMessage}>
          Search the job you want
        </Text>

        <View style={styles.searchContainer}>
          <View style={styles.searchWrapper}>
            <TextInput
              style={styles.searchInput}
              value={search}
              onChangeText={(text) => setSearch(text)}
              placeholder='What are you looking for?'
            />
          </View>

          <TouchableOpacity style={styles.searchBtn} onPress={handleClick} >
            <Image
              source={icons.search}
              resizeMode='contain'
              style={styles.searchBtnImage}
            />

          </TouchableOpacity>
        </View>

        <View style={styles.tabsContainer}>

          <FlatList
            data={jobsTypes}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.tab(activeJobType, item)}
                onPress={() => {
                  setActiveJobType(item)
                  router.push(`/search/${item}`)
                }
                }>
                <Text style={styles.tabText(activeJobType, item)} >
                  {item}
                </Text>

              </TouchableOpacity>
            )}
            keyExtractor={item => item}
            contentContainerStyle={{ columnGap: SIZES.small }}
            horizontal
          />

        </View>

      </View>
    </View>
  )
}

export default Welcome