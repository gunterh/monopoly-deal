import React from 'react';
import { Hand } from './components/Hand';
import { PlayersPanel } from './components/PlayersPanel';
import { Flex } from './components/Flex';
import { Bank } from './components/Bank';
import { Box } from './components/Box';
import './index.css';
import { Grid } from './components/Grid';
import { propertySets, moneyCards } from './cards';
import { Card } from './components/Card';
import { MoneyCard } from './components/MoneyCard';

const size = 100;

export default function App() {
  const [collapsed, setCollapsed] = React.useState(true);

  const handleClick = () => {
    setCollapsed(c => !c);
  };

  return (
    <Grid
      height="100vh"
      p="20px"
      gridTemplateRows="max-content 160px"
      gridRowGap="10px"
      position="relative"
    >
      <PlayersPanel />
      <Box overflow="hidden">
        <Flex
          position="relative"
          overflowX="auto"
          overflowY="hidden"
          height="100%"
        >
          <Hand {...{ collapsed, handleClick }} size={size} />
          {collapsed && <Bank size={size} />}
        </Flex>
      </Box>
      <Flex
        border="1px dashed"
        width="100%"
        height="100%"
        p="20px"
        overflowY="auto"
        flexWrap="wrap"
      >
        {Object.entries(propertySets).map(([keyPropertySet, propertySet]) => {
          return propertySet.properties.map(property => (
            <div key={keyPropertySet + property}>
              <Card
                title={property}
                size={size}
                color={propertySet.color}
                value={propertySet.value}
              />
            </div>
          ));
        })}
        {Object.entries(moneyCards).map(([key, money]) => (
          <div key={key}>
            <MoneyCard size={size} color={money.color} value={money.value} />
          </div>
        ))}
      </Flex>
    </Grid>
  );
}
