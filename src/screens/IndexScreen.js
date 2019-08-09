import React, { useContext } from 'react';
import {
    View,
    FlatList,
    StyleSheet,
    Text,
    Button,
    TouchableOpacity
} from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {
    const { state, addBlogPost, deleteBlogPost } = useContext(BlogContext);

    return (
        <View>
            <Button title="Add blog post" onPress={addBlogPost} />
            <FlatList
                data={state}
                keyExtractor={blogPost => {
                    return blogPost.title;
                }}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Show', {id: item.id})}>
                            <View style={styles.row}>
                                <Text style={styles.title}>
                                    {item.title}
                                    {item.id}
                                </Text>
                                <TouchableOpacity
                                    onPress={() => {
                                        deleteBlogPost(
                                            item.id
                                        );
                                    }}
                                >
                                    <Feather
                                        style={styles.icon}
                                        name="trash"
                                    />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

IndexScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: (
            <TouchableOpacity
                onPress={() => {navigation.navigate('Create')}}
            >
                <Feather size={30} name="plus" />
            </TouchableOpacity>
        )
    };
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'grey'
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    }
});

export default IndexScreen;
