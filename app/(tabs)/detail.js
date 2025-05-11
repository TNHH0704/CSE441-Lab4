import { useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react'
import { Button, Card, Text } from 'react-native-paper';

const detail = () => {
    const [data, setData] = useState([]);
    const params = useLocalSearchParams();
    const filePath = 'https://dummyjson.com/products/' + params.id;

    useEffect(() => {
        fetch(filePath)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setData(data);
            })
            .catch((error) => {
                console.error('There was a problem with the fetch operation:', error);
            });
    });
  return (
    <Card>
        <Card.Content style={{ padding: 10}}>
            <Card.Title title="Product Details" />
            <Card.Cover source={{ uri: data.thumbnail }} />
            <Text variant='titleLarge'>{data.title}</Text>
            <Text>{data.description}</Text>
            <Text>Price: ${data.price}</Text>
            <Text>Discount: {data.discountPercentage} off</Text>
            <Text>Rating: {data.rating}</Text>
            <Text>Stock: {data.stock}</Text>
            <Text>Category: {data.category}</Text>
            <Card.Actions>
                <Button>Delete</Button>
                <Button>Cancel</Button>
            </Card.Actions>
        </Card.Content>

    </Card>
  )
}

export default detail