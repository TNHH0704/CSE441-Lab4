import {Tabs} from 'expo-router';
import {Ionicons} from '@expo/vector-icons';

export default function TabsLayout() {
  return (
    <Tabs>
        <Tabs.Screen
            name="index"
            options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({focused}) => (
                <Ionicons 
                    name={focused? 'home' : 'home-outline'}
                    size={24}
                />
            ),
            }}
        />
        
        <Tabs.Screen
            name="productList"
            options={{
                title: 'Product List',
                headerShown: false,
                tabBarIcon: ({focused}) => (
                    <Ionicons 
                        name={focused? 'list' : 'list-outline'}
                        size={24}
                    />
                ),
            }}
        />
        <Tabs.Screen
            name="productAdd"
            options={{
                title: 'Add Product',
                headerShown: false,
                tabBarIcon: ({focused}) => (
                    <Ionicons 
                        name={focused? 'add-circle' : 'add-circle-outline'}
                        size={24}
                    />
                ),
            }}
        />
        <Tabs.Screen
            name="search"
            options={{
                title: 'Search',
                headerShown: false,
                tabBarIcon: ({focused}) => (
                    <Ionicons 
                        name={focused? 'search' : 'search-outline'}
                        size={24}
                    />
                ),
            }}
        />
        <Tabs.Screen
            name="detail"
            options={{
                title: 'Details',
                headerShown: false,
                tabBarIcon: ({focused}) => (
                    <Ionicons 
                        name={focused? 'information-circle' : 'information-circle-outline'}
                        size={24}
                    />
                ),
            }}
        />
    </Tabs>
  );
}