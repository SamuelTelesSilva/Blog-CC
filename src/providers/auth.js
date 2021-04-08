import React, { createContext, useState } from 'react';

export const AuthContext = createContext({});

export const AuthProvider = (props) => {
    const [conteudo, setConteudo] = useState();

    return(
       <AuthContext.Provider value={{conteudo,setConteudo}}>
            {props.children}
       </AuthContext.Provider> 
    );
}

export const useAuth = () => React.useContext(AuthContext);