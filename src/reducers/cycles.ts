interface CyclesState {
  cycles: Cycle[];
  activeCycleId: string | null;
}

export interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
  startDate: Date;
  interruptedDate?: Date;
  finishedDate?: Date;
}

export enum ActionTypes {
  ADD_NEW_CYCLE = "ADD_NEW_CYCLE",
  INTERRUPT_CURRENT_CYCLE = "INTERRUPT_CURRENT_CYCLE",
  MARK_CURRENT_CYCLE_AS_FINISHED = "MARK_CURRENT_CYCLE_AS_FINISHED"
}

export const cyclesReducer = (state: CyclesState, action: any) => {
  
    if (action.type === ActionTypes.ADD_NEW_CYCLE) {
      return {
        ...state,
        cycles: [...state.cycles, action.payload.newCycle],
        activeCycleId: action.payload.newCycle.id,
      };
    }
    if (action.type === ActionTypes.INTERRUPT_CURRENT_CYCLE) {
      return {
        ...state,
        cycles: state.cycles.map((cycle) => {
          if (cycle.id === state.activeCycleId) {
            return { ...cycle, interruptedDate: new Date() };
          } else {
            return cycle;
          }
        }),
        activeCycleId: null,
      };
    }

    if (action.type === ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED) {
      return {
        ...state,
        cycles: state.cycles.map((cycle) => {
          if (cycle.id === state.activeCycleId) {
            return { ...cycle, finishedDate: new Date() };
          } else {
            return cycle;
          }
        }),
        activeCycleId: null,
      };
    }

    return state;
  }
