import {
  CustomFlowbiteTheme,
  Label,
  TextInput as FlowbiteTextInput,
  TextInputProps as FlowbiteTextInputProps,
} from 'flowbite-react';
import { ErrorMessage, useField, useFormikContext } from 'formik';

type TextInputProps = FlowbiteTextInputProps & {
  name: string;
  label?: string;
  placeholder?: string;
  shouldDisplayLabel?: boolean;
  required?: boolean;
};

const customTheme: CustomFlowbiteTheme['textInput'] = {
  field: {
    input: {
      base: 'border-none bg-gray-100 block w-full disabled:cursor-not-allowed disabled:opacity-50',
    },
  },
};

export const TextInput = ({
  name,
  label,
  type = 'text',
  shouldDisplayLabel = true,
  required,
  ...props
}: TextInputProps): JSX.Element => {
  const [field] = useField(name);
  const { handleChange } = useFormikContext();

  return (
    <>
      {shouldDisplayLabel ? (
        <div className="my-1">
          <Label htmlFor={name} className="text-sm font-semibold">
            {label}
            {required ? <span className="text-red-500">*</span> : null}
          </Label>
        </div>
      ) : null}
      <div className="bg-gray-100 rounded-lg">
        <FlowbiteTextInput
          {...props}
          {...field}
          type={type}
          name={name}
          color="transparent"
          className=" rounded-lg"
          onChange={handleChange}
          theme={customTheme}
        />
      </div>

      <ErrorMessage className="h-3" name={name}>
        {(msg) => (
          <div id={name} className="text-sm text-red-500" role="alert" aria-label={msg}>
            {msg}
          </div>
        )}
      </ErrorMessage>
    </>
  );
};
