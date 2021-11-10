import type { NextPage } from 'next';
import SafeEnvironment from '@components/feedback/SafeEnvironment/SafeEnvironment';
import PageTitle from '@components/data-display/PageTitle/PageTitle';
import UserInformation from '@components/data-display/UserInformation/UserInformation';
import TextFieldMask from '@components/inputs/TextFieldMask/TextFieldMask';
import { Button, Container, Typography } from '@mui/material';
import { FormElementsContainer, ProfessionalsContainer, ProfessionalsPaper } from '@styles/pages/index.style';

const Home: NextPage = () => {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title='Conheça os profissionais'
        subtitle='Insira seu endereço e veja todos os profissionais da sua localidade!'
      />
      <Container>
        <FormElementsContainer>
          <TextFieldMask mask={'99.999-999'} variant='outlined' label='Digite seu CEP' fullWidth />
          <Typography color='error'>CEP inválido</Typography>
          <Button variant='contained' color='secondary' sx={{ width: '220px' }}>
            Buscar
          </Button>
        </FormElementsContainer>
        <ProfessionalsPaper>
          <ProfessionalsContainer>
            <UserInformation name='Maira' img='https://github.com/m-fidalgo.png' rating={4} description='Cidade' />
            <UserInformation name='Outra' rating={4} description='Cidade' />
            <UserInformation name='Maira' img='https://github.com/m-fidalgo.png' rating={4} description='Cidade' />
            <UserInformation name='Outra' rating={4} description='Cidade' />
            <UserInformation name='Maira' img='https://github.com/m-fidalgo.png' rating={4} description='Cidade' />
            <UserInformation name='Outra' rating={4} description='Cidade' />
            <UserInformation name='Maira' img='https://github.com/m-fidalgo.png' rating={4} description='Cidade' />
            <UserInformation name='Outra' rating={4} description='Cidade' />
          </ProfessionalsContainer>
        </ProfessionalsPaper>
      </Container>
    </div>
  );
};

export default Home;
