
export const isAuthenticated = () => {
    if (typeof window === 'undefined') {     
      return false; 
    }
    
    const token = localStorage.getItem('access_token');
    return !!token;
  };
  