import React, { createContext, useState, useContext } from "react";


interface IAuthContext {
   logado: boolean;
   login(usuario: string, senha: string): void;
   logout(): void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC = ({ children }) => {

   const [logado, setLogado] = useState<boolean>(() => {
      const usuarioAtivo = localStorage.getItem('@estacionamento:ativo');

      return !!usuarioAtivo;
   })

   const login = (usuario: string, senha: string) =>{
      if( usuario === 'teste' && senha === 'teste'){
         localStorage.setItem('@estacionamento:ativo', 'true')
         setLogado(true)
      }else{
         alert('Senha ou usuario invalidos')
      }
   }

   const logout = () =>{
      localStorage.removeItem('@estacionamento:ativo')
      setLogado(false)
   }

   return (
      <AuthContext.Provider value={{logado, login, logout}}>
         {children}
      </AuthContext.Provider>
   )
}

function useAuth(): IAuthContext{
   const context = useContext(AuthContext)

   return context;
}

export { AuthProvider, useAuth};