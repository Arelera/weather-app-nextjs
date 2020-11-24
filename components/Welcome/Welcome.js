import S from './Welcome.module.css';

export default function Welcome() {
  return (
    <div className={S.welcome}>
      <h1 className={S.title}>The Weather App</h1>
      <h2 className={S.subtitle}>For Those Who Wanna Know The Weather</h2>
    </div>
  );
}
