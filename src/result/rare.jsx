import { ColoredMessage } from "./coloredMessage"

export const Rare = () => {
  const rarity = 1
  if (rarity === 3) {
    return (
      <>
        <ColoredMessage>🌟🌟🌟</ColoredMessage>
        <ColoredMessage color="white">超ラッキー!!!</ColoredMessage>
      </>
    )
  } else if (rarity === 2) {
    return (
      <>
        <ColoredMessage>🌟🌟</ColoredMessage>
        <ColoredMessage color="white">そこそこラッキーだね</ColoredMessage>
      </>
    )
  } else if (rarity === 1) {
    return (
      <>
        <ColoredMessage>🌟</ColoredMessage>
        <ColoredMessage color="white">残念!!クソアイテム!!課金しよう!!!</ColoredMessage>
      </>
    )
  }
}
