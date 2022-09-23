export const ColoredMessage = (props) => {
  const font = {
    fontSize: "35px",
    color: props.color,
  }

  return <p style={font}>{props.children}</p>
}
