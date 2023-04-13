import useClima from "../hooks/useClima";

export const Resultado = () => {
  const { resultado } = useClima();
  const { name, main } = resultado;

  const kelvin = 273.15;
  return (
    <div className="contenedor clima">
      <h2>El clima en {name} es</h2>

      <p>
        {parseInt(main.temp - kelvin)} <span>°C</span>
      </p>
      <div className="temp_min_max">
        <p>
          Mín: {parseInt(main.temp - kelvin)} <span>°C</span>
        </p>
        <p>
          Máx: {parseInt(main.temp - kelvin)} <span>°C</span>
        </p>
      </div>
    </div>
  );
};
