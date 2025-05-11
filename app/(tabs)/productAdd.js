import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const productAdd = () => {
    
    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [discountPercentage, setDiscountPercentage] = React.useState('');
    const [rating, setRating] = React.useState('');
    const [stock, setStock] = React.useState('');
    const [brand, setBrand] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [image, setImage] = React.useState('');
    const handleSubmit = () => {
        fetch('https://dummyjson.com/products/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: title,
                description: description,
                price: price,
                discountPercentage: discountPercentage,
                rating: rating,
                stock: stock,
                brand: brand,
                category: category,
                image: image,
            }),
        })
            .then((response) => response.json())
            .then(console.log);
        Alert.alert('Product Added Successfully');
    }



    return (
        <View style={styles.container}>
            <Text style={styles.title}>Add a Product</Text>
            <Text>Title</Text>
            <TextInput
                placeholder='Enter Title'
                style={styles.input}
            />
            <Text>Description</Text>
            <TextInput
                placeholder='Enter Description'
                style={styles.input}
            />
            <Text>Price</Text>
            <TextInput
                placeholder='Enter Price'
                style={styles.input}
            />
            <Text>Discount Percentage</Text>
            <TextInput
                placeholder='Enter Discount Percentage'
                style={styles.input}
            />
            <Text>Rating</Text>
            <TextInput
                placeholder='Enter Rating'
                style={styles.input}
            />
            <Text>Stock</Text>
            <TextInput
                placeholder='Enter Stock'
                style={styles.input}
            />
            <Text>Brand</Text>
            <TextInput
                placeholder='Enter Brand'
                style={styles.input}
            />
            <Text>Category</Text>
            <TextInput
                placeholder='Enter Category'
                style={styles.input}
            />
            <Text>Image</Text>
            <TextInput
                placeholder='Enter Image URL'
                style={styles.input}
            />
            <Button title='Submit' onPress={() => {
                handleSubmit();
                setTitle('');
                setDescription('');
                setPrice('');
                setDiscountPercentage('');
                setRating('');
                setStock('');
                setBrand('');
                setCategory('');
                setImage('');
            }} />
        </View>
    )
}

export default productAdd

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
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#0000FF',
    },
})