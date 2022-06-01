import { nanoid } from "nanoid/non-secure";
import {
  createContext, useCallback, useMemo, useState,
} from "react";

import Error from "../components/Error";
import { Container } from "../components/Error/style";

export const ErrorContext = createContext(null);

const NatificationProvider = ({ children }) => {
  const [natifications, setNatification] = useState([]);

  const createNatification = useCallback((message) => {
    setNatification((notifications) => {
      return [{ message, id: nanoid() }, ...notifications];
    });
  }, []);

  const contextValue = useMemo(() => ({
    createNatification,
  }), [createNatification]);

  const handleCloseNatification = (id) => {
    setNatification((notifications) => notifications.filter((notification) => notification.id !== id));
  };

  return (
    <ErrorContext.Provider value={contextValue}>
      <Container>
        {natifications.map(({ message, id }) => (
          <Error
            message={message}
            onClose={() => handleCloseNatification(id)}
            key={id}
          />
        ))}
      </Container>
      {children}
    </ErrorContext.Provider>
  );
};

export default NatificationProvider;
