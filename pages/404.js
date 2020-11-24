import S from '../styles/Custom404.module.css';

export default function Custom404() {
  return (
    <div className={S.container}>
      <h1 className={S.fof}>404</h1>
      <h2 className={S.msg}>This page could not be found</h2>
    </div>
  );
}
