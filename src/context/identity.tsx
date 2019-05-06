import * as React from 'react';
import { FC, ClassAttributes, createContext } from 'react';
import GoTrue from 'gotrue-js';
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

export const useIdentity = () => useNetlifyIdentity('http://example.com');

export const Provider: FC<ClassAttributes<HTMLElement>> = ({ children }) => {
  const context = createContext<Context>(useIdentity());
  return <context.Provider value={useIdentity()}>{children}</context.Provider>;
};
