
// Define global provider
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import { Slot, Stack } from "expo-router";


export default function RootLayout() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Slot />
        </GestureHandlerRootView>
    );
}