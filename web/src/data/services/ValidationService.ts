export const ValidationService = {
  zipCode(zipCode = '') {
    // substitui td que não é dígito por uma string vazia
    return zipCode.replace(/\D/g, '').length === 8;
  },
};
