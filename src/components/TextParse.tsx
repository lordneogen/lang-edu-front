import styles from "../css-modules/BasePage.module.css";

export default function TextParse({ text: text }: { text?: string }) {
  var text_parse: string[] = [];
  if (text != undefined) {
    text_parse = text.split(" ");
  }
  return (
    <div className={styles.subline}>
      {text_parse.map((val, index) => (
        <div key={index}>
          <p>{val.concat("\xa0")}</p>
        </div>
      ))}
    </div>
  );
}
