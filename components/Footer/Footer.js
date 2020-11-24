import S from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={S.footer}>
      <p>
        Site made by{' '}
        <a className={S.link} target="_blank" href="https://github.com/arelera">
          Arel
        </a>
      </p>
    </footer>
  );
}
