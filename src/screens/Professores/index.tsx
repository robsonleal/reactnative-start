import React from 'react';
import { Container } from './styles';
import { Button, TextButton } from './styles';
import { useNavigation } from '@react-navigation/native';

export function Professores() {
  const navigation = useNavigation();

  function openScreenDetalhesProfessores() {
    navigation.navigate('screenDetalhesProfessores');
  }

  return (
    <Container>
        <Button onPress={openScreenDetalhesProfessores}>
          <TextButton>Ver detalhes</TextButton>
        </Button>
    </Container>
  );
}