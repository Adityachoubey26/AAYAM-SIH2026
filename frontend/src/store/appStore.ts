export interface AppGlobalState {
  selectedHabitationId: string | null;
  activeRiskFilter: string | null;
}

export const initialAppStoreState: AppGlobalState = {
  selectedHabitationId: null,
  activeRiskFilter: null,
};
