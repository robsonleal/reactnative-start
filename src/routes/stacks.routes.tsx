import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ScreenA } from "../screens/ScreenA";
import { ScreenB } from "../screens/ScreenB";

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
    return (
        <Navigator >
            <Screen 
                name='screenA'
                options={{
                    title: 'Tela inicial',
                    headerTitleAlign: 'center'
                }}
                component={ScreenA}
            />
            <Screen 
                name='screenB'
                component={ScreenB}
            />
        </Navigator>
    )
}