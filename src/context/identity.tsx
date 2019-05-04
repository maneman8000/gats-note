import React, { FC, ClassAttributes, createElement, Consumer as C, createContext } from 'react';
import { useNetlifyIdentity, User, Settings } from 'react-netlify-identity';

interface Context {
  user: User | undefined;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
  isConfirmedUser: boolean;
  isLoggedIn: boolean;
  signupUser: (email: string, password: string, data: Object) => Promise<User | undefined>;
  loginUser: (email: string, password: string, remember?: boolean) => Promise<User | undefined>;
  logoutUser: () => Promise<User | undefined>;
  requestPasswordRecovery: (email: string) => Promise<void>;
  recoverAccount: (token: string, remember?: boolean | undefined) => Promise<User>;
  updateUser: (fields: Object) => Promise<User | undefined>;
  getFreshJWT: () => Promise<string>;
  authedFetch: {
    get: (endpoint: string, obj?: {}) => Promise<any>;
    post: (endpoint: string, obj?: {}) => Promise<any>;
    put: (endpoint: string, obj?: {}) => Promise<any>;
    delete: (endpoint: string, obj?: {}) => Promise<any>;
  };
  _goTrueInstance: GoTrue;
  _domain: string;
  loginProvider: (provider: 'bitbucket' | 'facebook' | 'github' | 'gitlab' | 'google') => void;
  acceptInviteExternalUrl: (
    provider: 'bitbucket' | 'facebook' | 'github' | 'gitlab' | 'google',
    token: string,
  ) => string;
  settings: () => Promise<Settings>;
}

export const useIdentity = () => useNetlifyIdentity('http://example.com/');

export const context = createContext<Context>();
export const Provider: FC<ClassAttributes<HTMLElement>> = ({ children }) => (
  <context.Provider>{children}</context.Provider>
);
export const Consumer = context.Consumer as C<Context>;
