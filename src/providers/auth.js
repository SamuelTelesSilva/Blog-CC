import React, { createContext } from 'react';

export const AuthContext = createContext({});

export const AuthProvider = (props) => {

    return(
       <AuthContext.Provider>
            {props.children}
       </AuthContext.Provider> 
    );
}

export const useAuth = () => React.useContext(AuthContext);