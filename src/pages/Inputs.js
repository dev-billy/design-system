import Input from "../components/Input";
import Layout from "../layout";
import styles from "../styles/inputspage.module.scss";
function Inputs() {
  return (
    <Layout>
      <h1>Inputs</h1>
      <div className={styles.all}>
        <h3>All Inputs</h3>
        <div className={styles.inputGroup}>
          <div className={styles.displayInput}>
            <code>{"<Input />"} </code>
            <Input />
          </div>
        </div>
        <div className={styles.inputGroup}>
          <div className={styles.displayInput}>
            <code>{"<Input error/>"} </code>
            <Input error />
          </div>
        </div>
        <div className={styles.inputGroup}>
          <div className={styles.displayInput}>
            <code>{"<Input disabled />"} </code>
            <Input disabled />
          </div>
        </div>
        <div className={styles.inputGroup}>
          <div className={styles.displayInput}>
            <code>{"<Input helperText='Some interesting text' />"} </code>
            <Input helperText="Some interesting text" />
          </div>
          <div className={styles.displayInput}>
            <code>{"<Input helperText='Some interesting text' />"} </code>
            <Input helperText="Some interesting text" error />
          </div>
        </div>
        <div className={styles.inputGroup}>
          <div className={styles.displayInput}>
            <code>{"<Input startIcon='phone' />"} </code>
            <Input startIcon="phone" />
          </div>
          <div className={styles.displayInput}>
            <code>{"<Input endIcon='password' />"} </code>
            <Input endIcon="password" />
          </div>
        </div>
        <div className={styles.inputGroup}>
          <div className={styles.displayInput}>
            <code>{"<Input value='Text' />"} </code>
            <Input value="Text" />
          </div>
        </div>
        <div className={styles.inputGroup}>
          <div className={styles.displayInput}>
            <code>{"<Input size='sm' />"} </code>
            <Input size="sm" />
          </div>
          <div className={styles.displayInput}>
            <code>{"<Input size='md' />"} </code>
            <Input size="md" />
          </div>
          <div className={styles.displayInput}>
            <code>{"<Input size='lg' />"} </code>
            <Input size="lg" />
          </div>
        </div>
        <div className={styles.inputGroup}>
          <div className={styles.displayInput}>
            <code>{"<Input fullwidth  />"} </code>
            <Input fullwidth />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Inputs;
