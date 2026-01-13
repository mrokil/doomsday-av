export const refreshFrequency = false

export const render = () => (
  <iframe
    src="https://www.youtube.com/embed/f17J3AXVK5w?autoplay=1&mute=1&controls=0&loop=1&playlist=f17J3AXVK5w&modestbranding=1&showinfo=0"
    style={{
      position: "fixed",
      top: "50%",
      left: "50%",
      width: "120vw",
      height: "120vh",
      transform: "translate(-50%, -50%)",
      border: "none",
      pointerEvents: "none",
      opacity: 0.9,
      filter: "contrast(110%) brightness(90%)"
    }}
    allow="autoplay"
  />
)
