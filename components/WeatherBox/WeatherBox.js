import { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';
import Search from '../Search/Search';
import S from './WeatherBox.module.css';

export default function WeatherBox({ data, isLoading, setIsLoading }) {
  const [unit, setUnit] = useState('C');

  useEffect(() => {
    setIsLoading(false);
  }, [data]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className={S.box}>
            {data.cod === 200 ? (
              <>
                <h2 className={S.location}>
                  {data.name},{' '}
                  <span className={S.country}>{data.sys.country}</span>
                </h2>
                <div className={S.degree}>
                  <p className={S.temp}>
                    {Math.round(
                      (unit === 'C'
                        ? data.main.temp
                        : (data.main.temp * 9) / 5 + 32) * 100
                    ) / 100}
                  </p>
                  <button
                    onClick={() => setUnit('C')}
                    className={`${S.cBtn} ${unit === 'C' && S.active}`}
                  >
                    C
                  </button>
                  <button
                    onClick={() => setUnit('F')}
                    className={`${S.fBtn} ${unit === 'F' && S.active}`}
                  >
                    F
                  </button>
                </div>
                <p className={S.weather}>{data.weather[0].main}</p>
                <p className={S.humidity}>Humidity {data.main.humidity}% </p>
                <p className={S.wind}>Wind {data.wind.speed} m/s</p>
              </>
            ) : (
              <div className={S.error}>Unable to find location</div>
            )}
          </div>
          <Search isLoading={isLoading} setIsLoading={setIsLoading} />
        </>
      )}
    </>
  );
}
