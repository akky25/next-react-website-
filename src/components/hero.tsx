type Props = {
  title: string;
  subtitle: string;
};

export default function Hero({ title, subtitle }: Props) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
}
