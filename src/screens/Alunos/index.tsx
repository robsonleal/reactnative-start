import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import { useGetData } from '../../services/hooks';

export function Alunos() {
  const { getAutores } = useGetData();
  const [loading, setLoading] = useState(true);
  const [autores, setAutores] = useState([]);

  const callGetAutores = async() => {
    const reponse = getAutores();

    console.log(reponse)
  }

  useEffect(() => {
    callGetAutores()
  }, []);

  return (
    <Container>
    </Container>
  );
}