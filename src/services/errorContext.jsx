import { nanoid } from "nanoid/non-secure";
import {
  createContext, useCallback, useMemo, useState,
} from "react";

import Error from "../components/Error";
import { Container } from "../components/Error/style";

export const ErrorContext = createContext(null);

const NatificationProvider = ({ children }) => {
  const [notifications, setNotification] = useState([]);

  const createNotification = useCallback((message) => {
    setNotification((prevNotifications) => {
      return [{ message, id: nanoid() }, ...prevNotifications];
    });
  }, []);

  const contextValue = useMemo(() => ({
    createNatification: createNotification,
  }), [createNotification]);

  const handleCloseNatification = (id) => {
    setNotification((prevNotifications) => prevNotifications.filter((notification) => notification.id !== id));
  };
  return (
    <ErrorContext.Provider value={contextValue}>
      <Container>
        {notifications.map(({ message, id }) => (
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
