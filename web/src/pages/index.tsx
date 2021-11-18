import type { NextPage } from 'next';
import { Button, Container, Typography, CircularProgress } from '@mui/material';
import {
  FormElementsContainer,
  ProfessionalsContainer,
  ProfessionalsPaper,
} from '@styles/pages/index.style';
import SafeEnvironment from '@components/feedback/SafeEnvironment/SafeEnvironment';
import PageTitle from '@components/data-display/PageTitle/PageTitle';
import UserInformation from '@components/data-display/UserInformation/UserInformation';
import TextFieldMask from '@components/inputs/TextFieldMask/TextFieldMask';
import useIndex from 'data/hooks/pages/useIndex.page';

const Home: NextPage = () => {
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

  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title='Conheça os profissionais'
        subtitle='Insira seu endereço e veja todos os profissionais da sua localidade!'
      />
      <Container>
        <FormElementsContainer>
          <TextFieldMask
            mask={'99.999-999'}
            variant='outlined'
            label='Digite seu CEP'
            fullWidth
            value={zipCode}
            onChange={(event) => setZipCode(event.target.value)}
          />

          {error && <Typography color='error'>{error}</Typography>}

          <Button
            variant='contained'
            color='secondary'
            sx={{ width: '220px' }}
            disabled={!validZipCode || isLoading}
            onClick={() => searchProfessionals(zipCode)}
          >
            {isLoading ? <CircularProgress size={20} /> : 'Buscar'}
          </Button>
        </FormElementsContainer>

        {isSearchDone &&
          (professionals.length > 0 ? (
            <ProfessionalsPaper>
              <ProfessionalsContainer>
                {professionals.map((item, index) => {
                  return (
                    <UserInformation
                      key={index}
                      img={item.user_picture}
                      name={item.full_name}
                      rating={item.rating}
                      description={item.city}
                    />
                  );
                })}
              </ProfessionalsContainer>
              <Container sx={{ textAlign: 'center' }}>
                {professionalsRemaining > 0 && (
                  <Typography sx={{ mt: 5 }}>
                    ... e mais {professionalsRemaining}{' '}
                    {professionalsRemaining > 1
                      ? 'profissionais atendem'
                      : 'profissional atende'}{' '}
                    ao seu endereço.
                  </Typography>
                )}
                <Button variant='contained' color='secondary' sx={{ mt: 5 }}>
                  Contratar um profissional
                </Button>
              </Container>
            </ProfessionalsPaper>
          ) : (
            <Typography align='center' color='textPrimary' sx={{ mb: 10 }}>
              Ainda não temos profissionais disponíveis em sua região :(
            </Typography>
          ))}
      </Container>
    </div>
  );
};

export default Home;
