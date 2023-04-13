import React from "react";

export const Formulario = () => {
  return (
    <div className="contenedor">
      <form>
        <div className="campo">
          <label htmlFor="ciudad">Ciudad</label>
          <input
            type="text"
            id="ciudad"
            name="ciudad"
            placeholder="Ej. Santiago"
          />
        </div>
        <div className="campo">
          <label htmlFor="pais">País</label>
          <select id="pais" name="pais">
            <option value="">Seleccione una opción</option>
            <option value="AR">Argentina</option>
            <option value="CL">Chile</option>
            <option value="CO">Colombia</option>
            <option value="ES">España</option>
            <option value="US">Estados Unidos</option>
            <option value="MX">México</option>
          </select>
        </div>

        <input type="submit" value="Consultar clima" className="btn btn-primario btn-block" />
      </form>
    </div>
  );
};
