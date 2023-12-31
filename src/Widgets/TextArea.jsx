import { useField } from "formik";

export default function TextArea ({ label, ...props })  {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <textarea
        rows={10}
        {...field}
        {...props}
      />      
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
}