import { useApp } from "./useApp";

export function useAppDispatch() {
  const { dispatch } = useApp();
  return dispatch;
}
