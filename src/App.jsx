import { GlobalContextProvider } from "./context/globalContext.jsx";
import { RoutesProvider } from "./providers/RoutesProvider";

export const App = () => {

  return (
    <>
      <GlobalContextProvider>
        <RoutesProvider />
      </GlobalContextProvider>
    </>
  );
};
