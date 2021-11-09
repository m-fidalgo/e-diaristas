import type { NextPage } from "next";
import SafeEnvironment from "@components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "@components/data-display/PageTitle/PageTitle";
import UserInformation from "@components/data-display/UserInformation/UserInformation";

const Home: NextPage = () => {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title='Conheça os profissionais'
        subtitle='Insira seu endereço e veja todos os profissionais da sua localidade!'
      />
      <UserInformation
        name='Maira'
        img='https://github.com/m-fidalgo.png'
        rating={4}
        description='Cidade'
      />
      <UserInformation name='Outra' rating={4} description='Cidade' />
    </div>
  );
};

export default Home;
