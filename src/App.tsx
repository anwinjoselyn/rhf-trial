import { useForm } from "react-hook-form";

import { formValues, formData } from "./defaultValues";
import { schema } from "./schema";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: formValues,
    resolver: schema,
  });

  const onSubmit = (data: any) => {
    console.log("Form Data", data);
  };

  console.log("errors", errors);
  return (
    <div className="App">
      <h1>A simple form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {formData.map((formItem: any) => (
          <div key={formItem.name}>
            <input {...register(formItem.name)} required={formItem.required} />
          </div>
        ))}
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
