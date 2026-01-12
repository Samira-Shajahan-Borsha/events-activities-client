import { getInputFieldError, IInputErrorState } from "@/lib/getInputFieldError";
import { FieldDescription } from "../ui/field";

interface InputFieldErrorProps {
  field: string;
  state: IInputErrorState;
}

const InputFieldError = ({ field, state }: InputFieldErrorProps) => {
  // console.log({ state, field })
  if (getInputFieldError(field, state)) {
    return (
      <FieldDescription className="text-[11px] text-destructive leading-tight">
        {getInputFieldError(field, state)}
      </FieldDescription>
    );
  }

  return null;
};

export default InputFieldError;
