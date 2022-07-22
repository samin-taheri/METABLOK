import React from 'react'
import { Snackbar } from 'react-native-paper'
import { StyleSheet, View, Text } from 'react-native'

export default function ToastMessage({ type = 'error', message, onDismiss }) {
    return (
        <View style={styles.container}>
            <Snackbar
                visible={!!message}
                duration={3000}
                onDismiss={onDismiss}
                style={{
                    backgroundColor:
                        type === 'error' ? '#595959': '#595959',
                    top: '90%'
                }}
            >
                <Text style={styles.content}>{message}</Text>
            </Snackbar>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 100,
        width: '100%',
    },
    content: {
        fontWeight: '500',
    },
})
