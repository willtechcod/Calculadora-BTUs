import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Info } from '../screens/Info';
import { State } from '../screens/State';
import { Roof } from '../screens/Roof';
import { Measure } from '../screens/Measure';
import { Windows } from '../screens/Windows';
import { Period } from '../screens/Period';
import { Lights } from '../screens/ Lights';
import { Electronics } from '../screens/Electronics';
import { People } from '../screens/People';
import { Result } from '../screens/Result';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="info" component={Info} />
      <Screen name="state" component={State} />
      <Screen name="roof" component={Roof} />
      <Screen name="measure" component={Measure} />
      <Screen name="windows" component={Windows} />
      <Screen name="period" component={Period} />
      <Screen name="lights" component={Lights} />
      <Screen name="electronics" component={Electronics} />
      <Screen name="people" component={People} />
      <Screen name="result" component={Result} />
    </Navigator>
  )
}