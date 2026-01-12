export interface IInputErrorState {
    success: boolean;
    errors: {
        field: string;
        message: string;
    }[];
}
export const getInputFieldError = (fieldName: string, state: IInputErrorState) => {
    if (state && state.errors) {
        // const error = state.errors.find((err) => err.field === fieldName);
        // return error ? error.message : null;
        const error = state?.errors?.find((err) => err.field === fieldName);
        if (error) {
            return error?.message;
        } else {
            return null;
        }
    } else {
        return null;
    }
};
