export default function Toast({ message }) {
  const modal_styling = {
    position: "fixed",
    top: "20px",
    margin: "auto",
    maxWidth: "200px",
    width: "100%",
  };

  const ty_toast = {
    fontSize: "1rem",
    color: "#000000",
  };

  return (
    <div style={modal_styling}>
      <p className="text-center" style={ty_toast}>
        {message}
      </p>
    </div>
  );
}
