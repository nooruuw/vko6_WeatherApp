import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { useEffect } from 'react'

const api = {
    url: process.env.EXPO_PUBLIC_API_URL,
    key: process.env.EXPO_PUBLIC_API_KEY,
    icons: process.env.EXPO_PUBLIC_ICONS_URL
}

export default function Weather({lat, lon}) {
    const [temp, setTemp] = useState('')
    const [description, setDescription] = useState('')
    const [icon, setIcon] = useState('')
    const [wind, setWind] = useState('')


    useEffect(() => {
        const url = api.url +
        'lat=' + lat +
        '&lon=' + lon +
        '&units=metric' +
        '&lang=fi' +
        '&appid=' + api.key

        fetch(url)
        .then(response => response.json())
        .then(json=>{
            setTemp(json.main.temp)
            setDescription(json.weather[0].description)
            setIcon(api.icons + json.weather[0].icon + '@2x.png')
            setWind(json.wind.speed)
        }).catch(error=> {
            console.log(error)
        })



    }, [])
    

  return (
    <View>
        <Text>{temp}&#8451;</Text>
        <Text>{description}</Text>
        <Text>Wind: {wind} m/s</Text>
        {icon && 
            <Image source={{uri: icon}} style={{width: 100, height: 100}}/>
        }
        
    </View>
  )
}