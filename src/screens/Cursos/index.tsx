import React from 'react';
import { Container, Button, TextButton } from './styles';
import { useNavigation } from '@react-navigation/native';

export function Cursos() {
  const navigation = useNavigation();

  function openScreenDetalhesCursos() {
    navigation.navigate('screenDetalhesCursos');
  }

  return (
    <Container>
        <Button onPress={openScreenDetalhesCursos}>
          <TextButton>Ver detalhes</TextButton>
        </Button>
    </Container>
  );
}