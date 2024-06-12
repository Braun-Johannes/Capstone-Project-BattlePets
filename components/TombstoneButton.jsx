import PositionedButton from "@/components/Styles/StyledButton";
import SVGIcon from "./SVGIcon";

export default function TombstoneButton({ selectedPet, onDeletePet }) {
  return (
    <>
      <PositionedButton
        onClick={onDeletePet}
        $variant="tombstone"
        position="relative"
      >
        <SVGIcon
          variant="tombstone"
          size={300}
          text={selectedPet.name}
        ></SVGIcon>
      </PositionedButton>
    </>
  );
}
