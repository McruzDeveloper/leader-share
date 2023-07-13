import React from "react";
import { Player } from "./types/Player";
import { BsShare } from "react-icons/bs";
import Avatar from "react-avatar";
import { ShareLeaderBoard } from "./ShareLeaderBoard";

type Props = {
  player: Player;
};

const PlayerItem: React.FC<Props> = ({ player }) => (
  <tr>
    <td>
      <Avatar name={player.name} size="50" round={true} />
    </td>
    <td>{player.name}</td>
    <td>{player.score}</td>
    <td>
      <ShareLeaderBoard />
    </td>
  </tr>
);

export default PlayerItem;
