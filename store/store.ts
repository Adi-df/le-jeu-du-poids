import create from "zustand/react";

type GamePlayer = { id: number, name: string, points: number };
type GameState = {
  targetWeight: number | null,
  players: GamePlayer[],

  setTargetWeight: (target: number) => void,
  setPlayers: (players: GamePlayer[]) => void,
  addPlayer: (id: number, name: string) => void
};

const useStore = create<GameState>(set => ({
  targetWeight: null,
  players: [],

  setTargetWeight: (target: number) => set(_state => ({ targetWeight: target })),
  setPlayers: (players: GamePlayer[]) => set(_state => ({ players })),

  addPlayer: (id: number, name: string) => set(state => ({
    players: [...state.players, {
      id,
      name,
      points: 0
    }]
  }))
}));

export default useStore;
