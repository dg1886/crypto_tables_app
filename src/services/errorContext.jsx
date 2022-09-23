import { nanoid } from "nanoid/non-secure";
import {
  createContext, useCallback, useMemo, useState,
} from "react";

import Error from "../components/Error";
import { Container } from "../components/Error/style";

export const ErrorContext = createContext(null);

const NotificationProvider = ({ children }) => {
  const [notifications, setNotification] = useState([]);

  const createNotification = useCallback((message) => {
    setNotification((prevNotifications) => {
      return [{
        message,
        id: nanoid(),
      }, ...prevNotifications];
    });
  }, []);

  const contextValue = useMemo(() => ({
    createNotification,
  }), [createNotification]);

  const handleCloseNotification = (id) => {
    setNotification((prevNotifications) => prevNotifications.filter((notification) => notification.id !== id));
  };
  return (
    <ErrorContext.Provider value={contextValue}>
      <Container>
        {notifications.map(({
          message,
          id,
        }) => (
          <Error
            message={message}
            onClose={() => handleCloseNotification(id)}
            key={id}
          />
        ))}
      </Container>
      {children}
    </ErrorContext.Provider>
  );
};

export default NotificationProvider;
