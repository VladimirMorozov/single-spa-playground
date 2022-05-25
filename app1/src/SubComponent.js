import { useEffect, useState } from "react";
import { useSubbedState } from "./useSubbedState";

export const SubComponent = () => {
    const authentication = useSubbedState('authentication', { authenticated: false });
    const name = authentication.authenticated ? authentication.name : 'nobody'
    return <p>Hello, {name}</p>;
}