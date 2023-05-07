import info from "../assets/coffe-info.jpg";
import Button from "./Button";

function Informacion() {
  return (
    <div className="grid  grid-cols-2" style={{borderBottom: "5px solid var(--thirty-color)"}}>
      <img src={info} className="w-auto h-auto"/>
      <div className="p-6 bg-secondary">
        <h3 className="text-center p-4 title">REASONS FOR DRINK COFFE</h3>
        <p>
          Estimulación: El café contiene cafeína, que es un
          estimulante natural que puede mejorar el estado de alerta y la
          concentración.
          <br /> <br />
          Mejora el estado de ánimo: La cafeína puede aumentar la producción de
          dopamina, un neurotransmisor que está relacionado con la sensación de
          felicidad y bienestar.
          <br /> <br />
          Ayuda a la digestión: El café puede estimular la producción de ácido
          clorhídrico en el estómago, lo que puede ayudar a la digestión de los
          alimentos.
          <br /> <br />
          Reduce el riesgo de enfermedades: Varios estudios han encontrado que
          el consumo regular de café puede reducir el riesgo de enfermedades
          como la diabetes tipo 2, la enfermedad de Parkinson y el cáncer de
          hígado.
        </p>
        <div className="pt-7  text-center">
        <Button text="DRINK ONE" color="#F2EBD5"/>
        </div>
      </div>
    
    </div>
  );
}

export default Informacion;
