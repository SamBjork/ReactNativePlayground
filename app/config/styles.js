import { Platform } from 'react-native';
import colors from './colors'

export default {
    colors,
    text: {
        color: colors.dark,

        ...Platform.select({
            ios: {
                fontSize: 18,
                fontFamily: "Avenir",
            },
            android: {
                fontSize: 18,
                fontFamily: "Roboto",
            },
        }),
    },
}