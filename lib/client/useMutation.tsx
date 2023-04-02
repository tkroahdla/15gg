import { useState } from "react";

// API에 요청을 보낼 때 사용하는 Hook

export interface UseMutationState<T> {
    loading: boolean;
    data?: T;
    error?: object;
}

export type UseMutaionResult<T, P = any> = [(data: P) => void, UseMutationState<T>];

export default function useMutation<T = any>(url: string): UseMutaionResult<T> {
    const [state, setState] = useState<UseMutationState<T>>({
        loading: false,
        data: undefined,
        error: undefined,
    });

    function mutation(data: any) {
        setState((prev) => ({ ...prev, loading: true }));
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) =>
                response.json().catch(() => {
                    return;
                })
            )
            .then((data) => setState((prev) => ({ ...prev, data })))
            .catch((error) => setState((prev) => ({ ...prev, error })))
            .finally(() => setState((prev) => ({ ...prev, loading: false })));
    }

    return [mutation, { ...state }];
}
