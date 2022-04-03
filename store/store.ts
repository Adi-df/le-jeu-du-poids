import create from "zustand/react";

type GameState = {
  targetWeight: number | null,
  players: { id: number, name: string, points: number }[],
  addPlayer: (id: number, name: string) => void
};

const useStore = create<GameState>(set => ({
  targetWeight: null,
  players: [],

  setTargetWeight: (target: number) => set(_state => ({ targetWeight: target })),
  addPlayer: (id: number, name: string) => set(state => ({
    players: [...state.players, {
      id,
      name,
      points: 0
    }]
  }))
}));

export default useStore;
