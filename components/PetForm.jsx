import { StyledSelectForm, StyledNameInput } from "@/styles";

export default function PetForm({ selectedPet, onHandleSubmit }) {
  return (
    <StyledSelectForm onSubmit={onHandleSubmit}>
      <label htmlFor="nameInput">Choose a name</label>
      <StyledNameInput
        id="nameInput"
        name="nameInput"
        type="text"
        defaultValue={selectedPet ? selectedPet.name : ""}
        placeholder="name"
        required
      />
      <button type="submit">Select</button>
    </StyledSelectForm>
  );
}
