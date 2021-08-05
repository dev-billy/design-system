import Layout from "../layout";
import Button from "../components/Button";
import styles from "../styles/buttonspage.module.scss";
function ButtonDisplayPage() {
  return (
    <Layout>
      <h1>Buttons</h1>
      <div className={styles.all}>
        <div className={styles.buttonGroup}>
          <div className={styles.displayBtn}>
            <code>{"<Button />"} </code>
            <Button />
          </div>
        </div>
        <div className={styles.buttonGroup}>
          <div className={styles.displayBtn}>
            <code>{"<Button variant='outlined' color='primary'/>"} </code>
            <Button variant="outlined" color="primary" />
          </div>
        </div>
        <div className={styles.buttonGroup}>
          <div className={styles.displayBtn}>
            <code>{"<Button variant='text' color='primary'/>"} </code>
            <Button variant="text" color="primary" disableShadow />
          </div>
        </div>
        <div className={styles.buttonGroup}>
          <div className={styles.displayBtn}>
            <code>{"<Button color='primary' disableShadow />"} </code>
            <Button color="primary" disableShadow />
          </div>
          <div className={styles.displayBtn}>
            <code>{"<Button variant='outlined' disableShadow />"} </code>
            <Button variant="outlined" color="primary" disableShadow />
          </div>
          <div className={styles.displayBtn}>
            <code>{"<Button variant='text'  disableShadow={false} />"}</code>
            <Button variant="text" color="primary" disableShadow={false} />
          </div>
        </div>
        <div className={styles.buttonGroup}>
          <div className={styles.displayBtn}>
            <code>{"<Button disabled />"} </code>
            <Button disabled />
          </div>
          <div className={styles.displayBtn}>
            <code>{"<Button variant='text' disabled/>"} </code>
            <Button variant="text" disabled />
          </div>
          <div className={styles.displayBtn}>
            <code>{"<Button variant='outlined' disabled/>"} </code>
            <Button variant="outlined" disabled />
          </div>
        </div>
        <div className={styles.buttonGroup}>
          <div className={styles.displayBtn}>
            <code>{"<Button startIcon='local_grocery_store' />"} </code>
            <Button color="primary" startIcon="local_grocery_store" />
          </div>
          <div className={styles.displayBtn}>
            <code>{"<Button endIcon='local_grocery_store' />"} </code>
            <Button color="primary" endIcon="local_grocery_store" />
          </div>
          <div className={styles.displayBtn}>
            <code>{"<Button endIcon='local_grocery_store' />"} </code>
            <Button
              color="primary"
              endIcon="local_grocery_store"
              variant="outlined"
            />
          </div>
        </div>
        <div className={styles.buttonGroup}>
          <div className={styles.displayBtn}>
            <code>{"<Button size='sm' />"} </code>
            <Button size="sm" />
          </div>
          <div className={styles.displayBtn}>
            <code>{"<Button size='md' />"} </code>
            <Button size="md" />
          </div>
          <div className={styles.displayBtn}>
            <code>{"<Button size='lg' />"} </code>
            <Button size="lg" />
          </div>
        </div>
        <div className={styles.buttonGroup}>
          <div className={styles.displayBtn}>
            <code>{"<Button color='default' />"} </code>
            <Button color="default" />
          </div>
          <div className={styles.displayBtn}>
            <code>{"<Button color='primary' />"} </code>
            <Button color="primary" />
          </div>
          <div className={styles.displayBtn}>
            <code>{"<Button color='secondary' />"} </code>
            <Button color="secondary" />
          </div>
          <div className={styles.displayBtn}>
            <code>{"<Button color='danger' />"} </code>
            <Button color="danger" />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ButtonDisplayPage;
