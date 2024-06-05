import styles from "./style.module.css";

export default function ComponentsCards() {
  return (
    <div className={styles.container}>
      <h1>Customer testimonials</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <div className={styles.content}>
        <div className={styles.card}>
          <img src="" alt="star" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
            doloremque eligendi! Ab voluptatum fugiat eligendi aperiam ut totam
            distinctio debitis facere adipisci laboriosam accusantium excepturi
            assumenda, maiores, officia iusto quidem!
          </p>
        </div>
        <div className={styles.card}>
          <img src="" alt="star" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
            doloremque eligendi! Ab voluptatum fugiat eligendi aperiam ut totam
            distinctio debitis facere adipisci laboriosam accusantium excepturi
            assumenda, maiores, officia iusto quidem!
          </p>
        </div>
        <div className={styles.card}>
          <img src="" alt="star" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
            doloremque eligendi! Ab voluptatum fugiat eligendi aperiam ut totam
            distinctio debitis facere adipisci laboriosam accusantium excepturi
            assumenda, maiores, officia iusto quidem!
          </p>
        </div>
      </div>
    </div>
  );
}
