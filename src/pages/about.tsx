import Image from "next/image";

import styles from "@/styles/About.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <h1>Sobre o Projeto</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolorem
        vero et deleniti ea quae voluptatibus, distinctio quidem quasi voluptate
        magnam. Reiciendis minus eius distinctio soluta labore vitae veritatis
        nulla.
      </p>
      <Image
        src="/images/charizard.png"
        width="300"
        height="300"
        alt="Charizard"
      />
    </div>
  );
}
