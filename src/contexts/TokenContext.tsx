import React from 'react'
import { LoginResponse } from '../store/module/user/types';

const TokenContext = React.createContext<LoginResponse>({});

export default TokenContext;