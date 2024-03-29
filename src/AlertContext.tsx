"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import Alert from './Alert';

interface AlertType {
  type?: 'success' | 'error' | 'question';
  message: string;
  onOk?: () => void;
  onCancel?: () => void;
}

interface ContextType {
  setAlert: React.Dispatch<React.SetStateAction<AlertType | null>>;
}

const AlertContext = createContext<ContextType>({ setAlert: () => {} });

const AlertProvider = ({ children }: { children: ReactNode }) => {
  const [alert, setAlert] = useState<AlertType | null>(null);

  return (
    <AlertContext.Provider value={{ setAlert }}>
      {children}
      {alert && (
        <Alert
          type={alert.type}
          message={alert.message}
          onOk={alert.onOk}
          onCancel={alert.onCancel}
        />
      )}
    </AlertContext.Provider>
  );
};

export const useAlert = () => {
  return useContext(AlertContext);
};

export default AlertProvider;