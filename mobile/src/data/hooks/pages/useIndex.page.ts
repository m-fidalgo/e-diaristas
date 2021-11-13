import React, { useState, useMemo } from 'react';
import { UserInterface } from 'data/@types/UserInterface';
import { ValidationService } from 'data/services/ValidationService';
import { ApiService } from 'data/services/ApiService';

export default function useIndex() {
  const [zipCode, setZipCode] = useState(''),
    validZipCode = useMemo(() => {
      return ValidationService.zipCode(zipCode);
    }, [zipCode]),
    [error, setError] = useState(''),
    [isSearchDone, setIsSearchDone] = useState(false),
    [isLoading, setIsLoading] = useState(false),
    [professionals, setProfessionals] = useState([] as UserInterface[]),
    [professionalsRemaining, setProfessionalsRemaining] = useState(0);

  async function searchProfessionals(zipCode: string) {
    setIsSearchDone(false);
    setIsLoading(true);
    setError('');

    try {
      const { data } = await ApiService.get<{
        diaristas: UserInterface[];
        quantidade_diaristas: number;
      }>('/api/diaristas-cidade?cep=' + zipCode.replace(/\D/g, ''));
      setProfessionals(data.diaristas);
      setProfessionalsRemaining(data.quantidade_diaristas);
      setIsSearchDone(true);
    } catch (error) {
      setError('CEP não encontrado');
    }
    setIsLoading(false);
  }

  return {
    zipCode,
    setZipCode,
    validZipCode,
    searchProfessionals,
    error,
    professionals,
    isSearchDone,
    isLoading,
    professionalsRemaining,
  };
}