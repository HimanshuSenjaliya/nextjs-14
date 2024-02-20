import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Shree Ram</div>
      <div className={styles.text}>
        Himanshu Senjaliya thoughts agency &copy; All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
