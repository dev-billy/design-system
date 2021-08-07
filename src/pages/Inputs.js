import Input from "../components/Input";
import Layout from "../layout";

function Inputs() {
  return (
    <Layout>
      <h1>Inputs</h1>
      <Input />
      <Input error />
      <Input helperText="some interesting text" error />
      <Input helperText="some interesting text" />
      <Input endIcon="password" />
      <Input startIcon="phone" />
    </Layout>
  );
}

export default Inputs;
