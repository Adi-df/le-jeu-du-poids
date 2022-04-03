import create from "zustand";

type GamePlayer = { id: number, name: string, points: number };
type GameState = {
  targetWeight: number | null,
  players: GamePlayer[],
  leftRounds: number,

  setTargetWeight: (target: number) => void,
  setLeftRounds: (rounds: number) => void,
  setPlayers: (players: GamePlayer[]) => void,
  addPlayer: (id: number, name: string) => void,
  decrementRounds: () => void
};

const useStore = create<GameState>(set => ({
  targetWeight: null,
  players: [],
  leftRounds: 1,

  setTargetWeight: (target: number) => set(_state => ({ targetWeight: target })),
  setLeftRounds: (rounds: number) => set(_state => ({ leftRounds: rounds })),
  setPlayers: (players: GamePlayer[]) => set(_state => ({ players })),

  addPlayer: (id: number, name: string) => set(state => ({
    players: [...state.players, {
      id,
      name,
      points: 0
    }]
  })),
  decrementRounds: () => set(({ leftRounds }) => ({ leftRounds: leftRounds - 1 }))
}));

export type { GamePlayer }
export { useStore };
