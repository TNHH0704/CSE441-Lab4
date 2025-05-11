import { FlatList, StyleSheet, Text, View, Image, Button } from 'react-native'
import React, { useEffect } from 'react'
import { Link } from 'expo-router';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';


const ProductList = () => {

    const [data, setData] = React.useState([]);
    const filePath = 'https://dummyjson.com/products';

    useEffect(() => {
        fetch(filePath)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setData(data.products);
            })
            .catch((error) => {
                console.error('There was a problem with the fetch operation:', error);
            });
    });

    



    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1, padding: 10 }}>
                <Text style={{ fontSize: 36, fontWeight: 'bold', marginBottom: 10 }}>Product List</Text>
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={{ flexDirection: 'row', marginBottom: 10, padding: 10, backgroundColor: '#fff', borderRadius: 5 }}>
                            <Image
                                source={{ uri: item.thumbnail }}
                                style={{ width: 100, height: 100, borderRadius: 5, marginRight: 10 }}
                            />
                            <View style={{ flex: 1 }}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.title}</Text>
                                <Text>{item.description}</Text>
                                <Text style={{ color: 'gray' }}>Price: ${item.price}</Text>
                                <Text style={{ color: '#239023' }}>Discount: {item.discountPercentage} off</Text>
                                <Text style={{ color: 'gray' }}>Rating: {item.rating}</Text>
                                <Text style={{ color: 'gray' }}>Stock: {item.stock}</Text>
                                <Text style={{ color: 'gray' }}>Category: {item.category}</Text>
                                <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Link href={{ pathname: '/detail', params: { id: item.id } }}>
                                        <Button title="Details" />
                                    </Link>
                                    <Button title="Add" />
                                    <Button title="Delete" />
                                </View>
                            </View>
                        </View>
                    )}
                />
            </SafeAreaView>
        </SafeAreaProvider>
    )

}

export default ProductList

const styles = StyleSheet.create({

})