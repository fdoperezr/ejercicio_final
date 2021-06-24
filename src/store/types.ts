export type Selectors<T> = {
    data: T;
    success: boolean | null;
    error: boolean | null;
    errorMessage: string;
    loading: boolean;
}