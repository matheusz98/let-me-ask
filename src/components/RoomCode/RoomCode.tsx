import CopyImg from "../../assets/images/copy.svg";
import "../../styles/room-code.scss";

type RoomCodeProps = {
  code: string;
};

export function RoomCode(props: RoomCodeProps) {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(props.code);
    alert("Código da sala copiado com sucesso!");
  }

  return (
    <button className="room-code" onClick={copyRoomCodeToClipboard}>
      <div>
        <img src={CopyImg} alt="Copiar ID da sala" />
      </div>
      <span>Sala #{props.code}</span>
    </button>
  );
}
