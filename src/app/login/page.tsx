import FormLogin from "./_form";

import styles from "./styles.module.css";

export default async function Page() {
  return (
    <div className={styles.backgroud}>
      <FormLogin />
    </div>
  );
}
