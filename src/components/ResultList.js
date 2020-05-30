import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, Dimensions, TextInput, Switch, FlatList, Image ,TouchableOpacity} from 'react-native';
const { width, height } = Dimensions.get('window')
import {withNavigation} from 'react-navigation'
const ResultList = ({ title, data ,navigate}) => {
	return (<View style={{ width, position: 'relative' }}>
		<Text style={{ backgroundColor: "black", color: "white", padding: 10 }}>{title} ({data.length})</Text>
		{data.length > 0 ?
			<FlatList
				data={data}
				horizontal={true}
				showsHorizontalScrollIndicator={false}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => {
					return <TouchableOpacity style={{ flex: 1, borderWidth: 1, margin: 5 }} onPress={()=>navigate("DetailScreen",{id:item.id})}>
						<View style={{ margin: 5 }}>
							<Image style={{
								height: 150,
								width: "100%",
								resizeMode: 'cover',
								borderRadius: 5,
								padding: 10,

							}} source={{ uri: item.image_url }}></Image>
							<Text style={{ marginHorizontal: 5, fontWeight: "bold" }}>{item.name}</Text>
							<Text style={{ marginHorizontal: 5, }}>{item.rating}/5 Rating,Review :{item.review_count},{item.is_closed ? "Closed" : "Open"}</Text>
						</View>
					</TouchableOpacity>
				}}
			/>
			:
			<View style={{ height: 150,justifyContent:"center" }}>
				<Text style={{textAlign:"center"}}>No Data Found !</Text>

			</View>
		}
	</View>)
}

const styles = StyleSheet.create({

})

export default ResultList;