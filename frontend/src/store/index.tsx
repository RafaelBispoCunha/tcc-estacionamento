import { createContext, useContext } from 'react';
import { RootStore } from './RootStore'

const StoreContext = createContext<RootStore>({} as RootStore);


const RootProvider: React.FC = ({ children}) =>{
   const rootStore = new RootStore();
   return(
      <StoreContext.Provider value={rootStore}>
         {children}
      </StoreContext.Provider>
   )
}

const useStoreContext = () => useContext(StoreContext);

export { RootProvider, useStoreContext};