import styled from '@emotion/native';

export const FormContainer = styled.View`
  padding: 0 ${({ theme }) => theme.spacing(2)};
`;

export const TextContainer = styled.Text`
  text-align: center;
  padding-top: ${({ theme }) => theme.spacing(4)};
  color: ${({ theme }) => theme.colors.text};
`;

export const ErrorText = styled(TextContainer)`
  color: ${({ theme }) => theme.colors.error};
`;

export const ResponseContainer = styled.View`
  padding-top: ${({ theme }) => theme.spacing(5)};
  padding-bottom: ${({ theme }) => theme.spacing(8)};
`;
