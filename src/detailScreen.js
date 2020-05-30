import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, TextInput, Switch, ScrollView, Image, FlatList, Dimensions } from 'react-native';
import axios from './api/apiConfig'
import Swiper from 'react-native-swiper'
const { width, height } = Dimensions.get('window')

const detailScreen = ({ route, navigation }) => {

	const [result, setResult] = useState(null);
	const serachById = async () => {
		try {

			const response = await axios.get(`/${route.params.id}`, {})
			console.log(response.data.photos);
			setResult(response.data)
		} catch (err) {
			console.log('err: ', err);

		}
	}

	useEffect(() => {
		serachById()
	}, [])

	return <View style={{ flex: 1, borderWidth: 2 }}>
		<View style={{ flex: .4 }} >
			{result ?
				<Swiper autoplay>
					{result.photos.map((item, index) => <Image source={{ uri: item }} style={styles.imgBackground}></Image>)}
				</Swiper>
				:
				<Text>fetching</Text>
			}
		</View>
	</View>
}

const styles = StyleSheet.create({
	imgBackground: {
		width,
		height: null,
		flex: 1,
		resizeMode: "contain"
	}
})

export default detailScreen;