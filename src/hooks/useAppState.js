import { useApp } from "./useApp";

export function useAppState() {
  const { state } = useApp();
  return state;
}
