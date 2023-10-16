import styles from "./ContactForm.module.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
const ContactForm = () => {
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="via support chat"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button text="via call" icon={<FaPhoneAlt fontSize="24px" />} />
        </div>
        <Button
          isOutline={true}
          text="via email form"
          icon={<HiMail fontSize="24px" />}
        />
        <form action="">
          <div className={styles.control_form}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.control_form}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.control_form}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="8" />
          </div>
          <div className={styles.submit_btn}>
            <Button isOutline={false} text="Submit" />
          </div>
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src="./images/service_image.png" alt="" />
      </div>
    </section>
  );
};

export default ContactForm;
