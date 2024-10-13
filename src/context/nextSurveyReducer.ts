export interface NextSurveyState {
  surveysId: number | undefined;
  weekdays: string[];
  startDate: string;
  deadline: string;
}

export type NextSurveyAction =
  | { type: 'SET_WEEKDAYS'; payload: string[] }
  | { type: 'SET_START_DATE'; payload: string }
  | { type: 'SET_DEADLINE'; payload: string };

export const initialNextSurveyState = {
  surveysId: undefined,
  weekdays: [],
  startDate: '',
  deadline: '',
};

export function nextSurveyReducer(state: NextSurveyState, action: NextSurveyAction): NextSurveyState {
  switch (action.type) {
    case 'SET_WEEKDAYS':
      return {
        ...state,
        weekdays: action.payload,
      };
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.payload,
      };
    case 'SET_DEADLINE':
      return {
        ...state,
        deadline: action.payload,
      };
    default:
      return state;
  }
}
