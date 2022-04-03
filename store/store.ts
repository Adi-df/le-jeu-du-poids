import create from "zustand";

type GamePlayer = { id: number, name: string, points: number };
type GameState = {
  targetWeight: number | null,
  players: GamePlayer[],
  leftRounds: number,

  setTargetWeight: (target: number) => void,
  setLeftRounds: (rounds: number) => void,
  setPlayers: (players: GamePlayer[]) => void,
  getPlayer: (id: number) => GamePlayer | undefined,
  setPlayer: (id: number, player: GamePlayer) => void,
  setPlayerName: (id: number, name: string) => void,
  removePlayer: (id: number) => void,
  addPlayer: (id: number, name: string) => void,
  decrementRounds: () => void
};

const useStore = create<GameState>((set, get) => ({
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
  removePlayer: (id: number) => set(({ players }) => ({ players: players.filter(({ id: pid }) => id !== pid) })),
  getPlayer: (id: number) => get().players.find(({ id: pid }) => pid == id),
  setPlayer: (id: number, player: GamePlayer) => set(({ players }) => ({ players: players.map((p) => id === p.id ? player : p) })),
  setPlayerName: (id: number, name: string) => set(({ players }) => ({ players: players.map((p) => ({ name: id === p.id ? name : p.name, id: p.id, points: p.points })) })),
  decrementRounds: () => set(({ leftRounds }) => ({ leftRounds: leftRounds - 1 }))
}));

export type { GamePlayer }
export { useStore };
