import Form from "./components/Form";
import ListView from "./components/ListView";



export default function Page() {
  return (
    <main className="p-5 flex gap-5 flex-col md:flex-row">
      <Form />
      <ListView/>
    </main>
  );
}
