import { Field } from "formik";

const InputField = ({
  label,
  name,
  type,
  errors,
  placeholder,
  touched,
  setFieldValue,
  multiple,
  readOnly,
  ...props
}) => (
  <div className="w-full">
    <label className="mb-2 block text-black dark:text-white">{label}</label>
    <Field
      {...props}
      type={type}
      name={name}
      readOnly={readOnly}
      placeholder={placeholder}
      multiple={multiple}
      className={`w-full rounded-lg border border-stroke bg-transparent py-3 px-3 outline-none ${
        readOnly ? "bg-gray" : "" // Add a different background color for read-only fields if needed
      } ${
        errors[name] && touched[name] ? "border-danger" : ""
      } ${
        readOnly ? "" : "focus:border-primary focus-visible:shadow-none border-bodydark"
      }`}
    />
    {errors[name] && touched[name] && (
      <div className="text-danger">{errors[name]}</div>
    )}
  </div>
);

export default InputField;