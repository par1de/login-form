export const userLogin = async ({ email, password }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === 'email@dominio.com' && password === 'psw') {
        resolve();
      } else {
        reject();
      }
    }, 1000);
  });
};
