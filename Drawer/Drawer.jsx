import * as React from 'react';
import {View} from 'react-native';
import { Drawer } from 'react-native-paper';
import ExpandCollaps from './Expand/ExpandCollaps';

const DrawerContent = () => {
  const [active, setActive] = React.useState('History');

  return (
    <View>
    <Drawer.Section >
      <Drawer.Item
        label="History"
        active={active === 'History'}
        onPress={() => setActive('History')}
      />
      <Drawer.Item
        label="English"
        active={active === 'second'}
        onPress={() => setActive('second')}
      />
      <ExpandCollaps subject="MATHS" child1="Arithmetic" child2="Advance"/>
      <ExpandCollaps subject="English" child1="Neetu Singh" child2="Gopal Verma"/>
      
    </Drawer.Section>
    </View>
  );
};

export default DrawerContent;