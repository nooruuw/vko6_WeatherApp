import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Location from 'expo-location'
import Weather from './Weather'

export default function Position() {
    const [latitude, setLatitude] = useState(0)
    const [longitude, setLongitude] = useState(0)
    const [message, setMessage] = useState('Retrieving location...')
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        (async () => {
            try {
                let { status } = await Location.requestForegroundPermissionsAsync()
                if (status !== 'granted') {
                    setMessage('Paikannus ei salittu.')
                } else {
                    const position = await Location.getCurrentPositionAsync({accuracy: Location.Accuracy.High})
                    setLatitude(position.coords.latitude)
                    setLongitude(position.coords.longitude)
                    setMessage('Paikka löydetty.')
                    setIsLoading(false)
                }
            } catch (error) {
                setMessage('Paikannus ei onnisunut.')
                console.log(error)
            }
       
        })()
    }, [])



    return (
        <View>
            <Text>{message}</Text>
            <Text>{latitude.toFixed(3)}, {longitude.toFixed(3)}</Text>
            {isLoading === false &&
            <Weather lat={latitude} lon={longitude} />
            }
        </View>
    )
}