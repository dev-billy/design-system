import Layout from "../layout";
import Button from "../components/Button";
function ButtonDisplayPage() {
  return (
    <Layout>
      <h1>Different Variations of Buttons here</h1>
      <Button />
      <Button variant="text" color="danger" />
      <Button variant="outlined" color="default" />
    </Layout>
  );
}

export default ButtonDisplayPage;
