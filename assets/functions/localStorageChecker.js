const isUserNameInLocalStorage = () => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('userName') !== null;
    }
    return false;
  };

  export default isUserNameInLocalStorage;
  