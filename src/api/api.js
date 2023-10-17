export default {
  submitForm(props) {
    const response = new Promise((resolve) => {
      setTimeout(() => {
        resolve(props);
      }, 500);
    });
    return response;
  },
};
