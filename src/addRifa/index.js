import React from "react";
import {Text, TouchableOpacity, View} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import tw from 'tailwind-react-native-classnames';
import { SafeAreaView } from "react-native-safe-area-context";

export const AddRifa = () => {

    return(
        <LinearGradient
        colors={['#008B8B', 'white']}
        style={tw(['flex  flex-row h-full'])}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
    >
        <View>
            <TouchableOpacity
            onPress={() => {
                console.log('Adicionar Rifa')
            }
            }
            >
            <SafeAreaView>
                <Text>Adicionar</Text>
            </SafeAreaView>
            </TouchableOpacity>
        </View>    
        </LinearGradient>
    )
}