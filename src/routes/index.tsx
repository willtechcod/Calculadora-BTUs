import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { Loading } from '../components/Loading';
import { AppRoutes } from './app.routes';

export function Routes() {
    const [loading, setIsLoading] = useState(true);
    
    if (loading) {
      return <Loading />
    }
  
    return (
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    )
  }