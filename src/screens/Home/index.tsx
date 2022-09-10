import React from 'react';
import { Container, Button, TextButton } from './styles';
import { useNavigation } from '@react-navigation/native';

export function Home(){
  const navigation = useNavigation();

  function openScreenAlunos() {
    navigation.navigate('screenAlunos');
  }

  function openScreenCursos() {
    navigation.navigate('screenCursos');
  }

  function openScreenProfessores() {
    navigation.navigate('screenProfessores');
  }

  return (
    <Container>
     <Button onPress={openScreenAlunos}>
      <TextButton>Alunos</TextButton>
     </Button>

     <Button onPress={openScreenCursos}>
      <TextButton>Cursos</TextButton>
     </Button>

     <Button onPress={openScreenProfessores}>
      <TextButton>Professores</TextButton>
     </Button>
    </Container>
  );
}