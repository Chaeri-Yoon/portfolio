import { useState } from "react"
interface IState<T> {
    data: T,
    isLoading: boolean,
    error?: string
}
export default <T = any, S = any>(url: string): [(data: S) => void, IState<T>] => {
    const [state, setState] = useState<IState<T>>({
        data: {} as T,
        isLoading: false,
        error: undefined
    });
    const callApi = (data: S) => {
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