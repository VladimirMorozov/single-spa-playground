import { useEffect, useState } from "react";

export const useSubbedState = (stateName, initialValue) => {
    const [state, setState] = useState(initialValue);
    useEffect(() => {
        const unsubId = window.StatePubSub.subscribeToState(stateName, (state) => {
            setState(state);
        });
        return () => window.StatePubSub.unsubscribeFromState(stateName, unsubId);
      }, [stateName, initialValue]);
    return state;
}