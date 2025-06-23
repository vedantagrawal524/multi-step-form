import Form from "./component/Form";
import FormContextProvider from "./context/FormContext";

export default function App() {
  return (
    <FormContextProvider>
      <main className="font-ubuntu bg-Blue-100 flex min-h-screen flex-row items-center justify-center p-4 text-base">
        <Form />
      </main>
    </FormContextProvider>
  );
}
