import Layout from "../layout";
import Button from "../components/Button";
function ButtonDisplayPage() {
  return (
    <Layout>
      <h1>Different Variations of Buttons here</h1>
      <Button color="primary" />
      <Button variant="text" color="danger" />
      <Button variant="outlined" color="primary" disableShadow disabled />
    </Layout>
  );
}

export default ButtonDisplayPage;
