import * as React from 'react';
import { List } from 'react-native-paper';

const ExpandCollaps = ({subject,child1,child2}) => {
  const [expanded, setExpanded] = React.useState(true);


  return (
    <List.Section >
      <List.Accordion
        title={subject}
        left={props => <List.Icon {...props} icon="folder" />}>
        <List.Item title={child1} />
        <List.Item title={child2} />
      </List.Accordion>

    </List.Section>
  );
};

export default ExpandCollaps;