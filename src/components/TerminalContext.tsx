import React, { createContext, useContext, useState, ReactNode } from 'react';

interface TerminalContextType {
    isTerminalOpen: boolean;
    openTerminal: () => void;
    closeTerminal: () => void;
    toggleTerminal: () => void;
}

const TerminalContext = createContext<TerminalContextType | undefined>(undefined);

export const TerminalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isTerminalOpen, setIsTerminalOpen] = useState(false);

    const openTerminal = () => setIsTerminalOpen(true);
    const closeTerminal = () => setIsTerminalOpen(false);
    const toggleTerminal = () => setIsTerminalOpen((prev) => !prev);

    return (
        <TerminalContext.Provider value={{ isTerminalOpen, openTerminal, closeTerminal, toggleTerminal }}>
            {children}
        </TerminalContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTerminal = (): TerminalContextType => {
    const context = useContext(TerminalContext);
    if (!context) {
        throw new Error('useTerminal must be used within a TerminalProvider');
    }
    return context;
};
