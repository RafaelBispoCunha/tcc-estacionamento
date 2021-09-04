import React from 'react';
import { RootStore } from './RootStore'

const StoreContext = React.createContext<RootStore>({} as RootStore);


const RootProvider: React.FC = ({ children}) =>{
   
   return(
      <StoreContext.Provider value={new RootStore()}>
         {children}
      </StoreContext.Provider>
   )
}

const  useStoreContext = () => React.useContext(StoreContext);

export {RootProvider,  useStoreContext}
