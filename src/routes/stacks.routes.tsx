import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/Home";
import { Alunos } from "../screens/Alunos";
import { Cursos } from "../screens/Cursos"
import { DetalhesCursos } from "../screens/Cursos/detalhesCursos";
import { Professores } from "../screens/Professores"
import { DetalhesProfessores } from "../screens/Professores/detalhesProfessores"

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
    return (
        <Navigator >
            <Screen 
                name='home'
                options={{
                    title: 'Página Inicial',
                    headerTitleAlign: 'center'
                }}
                component={Home}
            />
            <Screen 
                name='screenAlunos'
                options={{
                    title: 'Alunos',
                    headerTitleAlign: 'center'
                }}
                component={Alunos}
            />
            <Screen 
                name='screenCursos'
                options={{
                    title: 'Cursos',
                    headerTitleAlign: 'center'
                }}
                component={Cursos}
            />
            <Screen 
                name='screenDetalhesCursos'
                options={{
                    title: 'Curso Detalhes',
                    headerTitleAlign: 'center'
                }}
                component={DetalhesCursos}
            />
            <Screen 
                name='screenProfessores'
                options={{
                    title: 'Professores',
                    headerTitleAlign: 'center'
                }}
                component={Professores}
            />
            <Screen 
                name='screenDetalhesProfessores'
                options={{
                    title: 'Professores Detalhes',
                    headerTitleAlign: 'center'
                }}
                component={DetalhesProfessores}
            />
        </Navigator>
    )
}