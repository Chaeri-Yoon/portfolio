import { useState } from "react"
import { IResponse } from "src/types";
interface IState<T> {
    data: T | null,
    isLoading: boolean,
    error?: object
}
export default <T extends IResponse, S = any>(url: string): [(data?: S) => void, IState<T>] => {
    const [state, setState] = useState<IState<T>>({
        data: null,
        isLoading: false,
        error: undefined
    });
    const callApi = (data?: S) => {
        setState(prev => ({ ...prev, loading: true }));
        fetch(url, {
            method: 'GET',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        }).then(response => response.json())
            .then(data => setState(prev => ({ ...prev, data })))
            .catch(error => setState(prev => ({ ...prev, error })))
            .finally(() => setState(prev => ({ ...prev, loading: false })));
    }
    return [callApi, { ...state }]
}