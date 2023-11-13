import { useState } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { CustomFlowbiteTheme, Label, TextInput, TextInputProps } from 'flowbite-react';
import { ErrorMessage, useField, useFormikContext } from 'formik';

type Props = TextInputProps & {
  name: string;
  label: string;
  placeholder?: string;
  shouldDisplayLabel?: boolean;
  showPasswordLabel: string;
  autoComplete?: string;
};

const customTheme: CustomFlowbiteTheme['textInput'] = {
  field: {
    input: {
      base: 'border-none bg-gray-100 block w-full disabled:cursor-not-allowed disabled:opacity-50',
    },
  },
};

export const FormikPasswordField = ({
  name,
  label,
  placeholder,
  shouldDisplayLabel = true,
  showPasswordLabel,
  autoComplete = 'on',
  required,
}: Props): JSX.Element => {
  const [field, , { setTouched }] = useField(name);
  const { handleChange } = useFormikContext();
  const [shouldShowPassword, setShouldShowPassword] = useState(false);

  return (
    <>
      {shouldDisplayLabel ? (
        <div className="my-1">
          <Label htmlFor={name} value={label} className="text-sm font-semibold" />
          {required ? <span className="text-red-500">*</span> : null}
        </div>
      ) : null}
      <div className="flex bg-gray-100  items-center w-full justify-between border-none  rounded-lg ">
        <TextInput
          {...field}
          name={name}
          type={shouldShowPassword ? 'text' : 'password'}
          placeholder={placeholder}
          autoComplete={autoComplete}
          onChange={handleChange}
          onBlur={() => setTouched(true)}
          className="w-11/12 bg-inherit outline-none focus:outline-none rounded-lg border-none "
          color="transparent"
          theme={customTheme}
        />
        <button
          type="button"
          className="px-2 w-1/12  cursor-pointer bg-inherit"
          aria-label={showPasswordLabel}
          onClick={() => setShouldShowPassword((shouldShow) => !shouldShow)}
        >
          {shouldShowPassword ? <EyeSlashIcon /> : <EyeIcon />}
        </button>
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
