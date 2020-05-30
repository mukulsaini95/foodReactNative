import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, TextInput, Switch,ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import useResults from './hooks/useResults'
import MapView, { Marker } from 'react-native-maps';
import ResultList from "./components/ResultList"

const searchScreen = ({navigation}) => {
	const [searchApi, results, searchTerm, setSearchTerm] = useResults();
	const [isMapView, setIsMapView] = useState(false)
	return <View style={{ flex: 1, borderWidth: 2 }}>
		<View style={styles.background}>
			<Ionicons name="ios-search" style={styles.iconStyle} />
			<TextInput value={searchTerm} onChangeText={(newValue) => setSearchTerm(newValue)} style={styles.inputStyle} autoCapitalize="none" autoCorrect={false} placeholder="Search" onEndEditing={() => searchApi()} />
		</View>
		<View style={{flexDirection:'row'}}>
		<Text>We have Found {results.total} results...</Text>
		
		<Switch
			onValueChange={(value) => setIsMapView(value)}
			value={isMapView} /> 
		</View>
		<View style={{ flex: 1, borderWidth: 2 }}>
			{results.businesses && (isMapView ?
				<MapView
					style={{ flex: 1 }}
					region={{
						latitude: results.businesses[0] ? results.businesses[0].coordinates.latitude : 28.498064,
						longitude: results.businesses[0] ? results.businesses[0].coordinates.longitude : 77.239395,
						latitudeDelta: 0.015,
						longitudeDelta: 0.015,
					}}
					showsUserLocation={true}
				//   onRegionChange={this.onRegionChange}
				>
					{results.businesses.map((marker, index) => (
						<Marker
							// onPress={() => { navigation.navigate('Gallery') }}
							centerOffset={{ x: -42, y: -60 }}
							anchor={{ x: 0.84, y: 1 }}
							coordinate={marker.coordinates}
							title={marker.name}
							description={marker.description}
							key={index}
						>

						</Marker>
					))}
				</MapView>
				: 
				<ScrollView>
					<ResultList title="Cost Effective" navigate={navigation.navigate} data={results.businesses.filter(temp=>temp.price ==="$")}/>
					<ResultList title="Bit pricier" navigate={navigation.navigate} data={results.businesses.filter(temp=>temp.price ==="$")}/>
					<ResultList title="Big Spender"  navigate={navigation.navigate} data={results.businesses.filter(temp=>temp.price ==="$$$")}/>
				</ScrollView>)
			}
		</View >
	</View>
}

const styles = StyleSheet.create({
	background: {
		backgroundColor: '#808080',
		height: 50,
		margin: 20,
		flexDirection: "row",
	},
	inputStyle: {
		flex: 1,
		padding: 5,
	},
	iconStyle: {
		fontSize: 30,
		alignSelf: "center",
		marginHorizontal: 15
	}
})

export default searchScreen;