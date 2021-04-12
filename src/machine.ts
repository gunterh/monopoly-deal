import { createMachine } from 'xstate';

interface GameMachineContext {
  numberOfPlayers: number;
}

type GameMachineEvent = {
  type: 'start';
};

export const gameMachine = createMachine<GameMachineContext, GameMachineEvent>({
  id: 'monopoly-deal',
  initial: 'selectingNumberOfPlayers',
  context: {
    numberOfPlayers: 0
  }
});
