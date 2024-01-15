import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AppRoutes } from './app.routes';

export function Routes() {
    const [isloading, setIsLoading] = useState(true);
    
    return (
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    )
  }