export const ValidationService = {
  cep(cep = '') {
    // substitui td que não é dígito por uma string vazia
    return cep.replace(/\D/g, '').length === 8;
  },
};
