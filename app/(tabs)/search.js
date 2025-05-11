import { Button, FlatList, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const search = () => {
    const [data, setData] = React.useState([]);
    const [value, setValue] = React.useState('');
    let filePath = 'https://dummyjson.com/products';
    const searchProducts = () => {
        if (value != '') {
            filePath = 'https://dummyjson.com/products/search?q=' + value;
        }
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
    }

    return (
        <View style={styles.container}>
            <Text>Search Products</Text>
            <TextInput
                placeholder='Search Products'
                style={styles.input}
                onChangeText={(text) => setValue(text)}
            />
            <Button title="Search" onPress={searchProducts} />
            <SafeAreaProvider>
                <SafeAreaView style={{ flex: 1, padding: 10 }}>
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
                                        <Button title="Details" />
                                        <Button title="Add" />
                                        <Button title="Delete" />
                                    </View>
                                </View>
                            </View>
                        )}
                    />
                </SafeAreaView>
            </SafeAreaProvider>

        </View>
    )
}

export default search

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    input: {
        padding: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
})