import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

const settings = () => {
    return (
        <SafeAreaView>
            <View style={{ padding: 10 }}>
                <Text>settings</Text>
            </View>
        </SafeAreaView>
    )
}

export default settings;