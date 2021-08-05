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
          <div className={styles.displayBtn}>
            <code>{"&:hover, &:focus"} at me to see effect </code>
            <Button />
          </div>
        </div>
        <div className={styles.buttonGroup}>
          <div className={styles.displayBtn}>
            <code>{"<Button variant='outline' />"} </code>
            <Button variant="outlined" color="primary" />
          </div>
          <div className={styles.displayBtn}>
            <code>{"&:hover, &:focus"} at me to see effect </code>
            <Button variant="outlined" color="primary" />
          </div>
        </div>
        <div className={styles.buttonGroup}>
          <div className={styles.displayBtn}>
            <code>{"<Button variant='text' />"} </code>
            <Button variant="text" color="primary" disableShadow />
          </div>
          <div className={styles.displayBtn}>
            <code>{"&:hover, &:focus"} at me to see effect </code>
            <Button variant="text" color="primary" disableShadow />
          </div>
        </div>
        <div className={styles.buttonGroup}>
          <div className={styles.displayBtn}>
            <code>{"<Button disableShadow />"} </code>
            <Button variant="default" color="primary" disableShadow />
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
        </div>
      </div>
    </Layout>
  );
}

export default ButtonDisplayPage;
