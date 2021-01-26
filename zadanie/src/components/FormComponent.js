import FirstPart from "./form-parts/FirstPart";
import SecondPart from "./form-parts/SecondPart";
import ButtonComponent from "./ButtonComponent";

function FormComponent() {
  return (
    <div>
      <FirstPart />
      <SecondPart />
      <div className="flex flex-row justify-between mt-16 mb-5">
        <ButtonComponent text="Späť" />
        <ButtonComponent text="Pokračovať" disabled={true} />
      </div>
    </div>
  );
}

export default FormComponent;
