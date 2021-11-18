import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';
import { useTheme } from '@emotion/react';
import { TextInputMask } from 'react-native-masked-text';
import {
  FormContainer,
  TextContainer,
  ErrorText,
  ResponseContainer,
} from '@styles/pages/FindProfessionals.style';
import useIndex from 'data/hooks/pages/useIndex.page';
import useFindByLocation from 'data/hooks/pages/useFindByLocation.page.mobile';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import TextInput from 'ui/components/inputs/TextInput/TextInput';
import Button from 'ui/components/inputs/Button/Button';
import UserInformation from 'ui/components/data-display/UserInformation/UserInformation';

const FindProfessionals: React.FC = () => {
  const { colors } = useTheme();
  const {
    zipCode,
    setZipCode,
    validZipCode,
    searchProfessionals,
    error,
    professionals,
    isSearchDone,
    isLoading,
    professionalsRemaining,
  } = useIndex();
  const { automaticZipCode } = useFindByLocation();

  useEffect(() => {
    if (automaticZipCode && !zipCode) {
      setZipCode(automaticZipCode);
      searchProfessionals(automaticZipCode);
    }
  }, [automaticZipCode]);

  return (
    <ScrollView>
      <PageTitle
        title={'Conheça os profissionais'}
        subtitle={
          'Insira seu endereço e veja todos os profissionais da sua localidade!'
        }
      />

      <FormContainer>
        <TextInputMask
          value={zipCode}
          onChangeText={setZipCode}
          type={'custom'}
          options={{ mask: '99.999-999' }}
          customTextInput={TextInput}
          customTextInputProps={{
            label: 'Digite seu CEP',
          }}
          keyboardType='numeric'
        />

        {error ? <ErrorText>{error}</ErrorText> : null}

        <Button
          mode={'contained'}
          style={{ marginTop: 32 }}
          color={colors.accent}
          disabled={!validZipCode || isLoading}
          onPress={() => searchProfessionals(zipCode)}
          loading={isLoading}
        >
          Buscar
        </Button>
      </FormContainer>

      {isSearchDone &&
        (professionals.length > 0 ? (
          <ResponseContainer>
            {professionals.map((item, index) => {
              return (
                <UserInformation
                  key={index}
                  name={item.full_name}
                  rating={item.rating || 0}
                  img={item.user_picture}
                  description={item.city}
                  darker={index % 2 === 1}
                />
              );
            })}

            {professionalsRemaining > 0 && (
              <TextContainer>
                ... e mais {professionalsRemaining}{' '}
                {professionalsRemaining > 1
                  ? 'profissionais atendem'
                  : 'profissional atende'}{' '}
                ao seu endereço.
              </TextContainer>
            )}

            <Button
              mode={'contained'}
              style={{ marginTop: 32 }}
              color={colors.accent}
            >
              Contratar um profissional
            </Button>
          </ResponseContainer>
        ) : (
          <TextContainer>
            Ainda não temos profissionais disponíveis em sua região :(
          </TextContainer>
        ))}
    </ScrollView>
  );
};

export default FindProfessionals;
