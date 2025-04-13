import { Link } from "react-router-dom";

const Start = () => {
  const isLoggedIn = localStorage.getItem("auth") === "true";

  const handleLogin = () => {
    localStorage.setItem("auth", "true");
    window.location.reload(); // recarga para actualizar la vista
  };

  const handleLogout = () => {
    localStorage.removeItem("auth");
    window.location.reload();
  };

  const showDenied = window.location.search.includes("denied=true");

  return (
    <div>
      <h1>Welcome to online store</h1>
      {showDenied && <p style={{ color: "red" }}>Not logged in</p>}

      <p>Explora nuestros productos o revisa tus pedidos si estás autenticado.</p>

      <Link to="/products">Ir a Productos</Link>
      <br />
      <Link to="/orders">Ir a Mis Pedidos</Link>
      <br /><br />

      {isLoggedIn ? (
        <button onClick={handleLogout}>Cerrar sesión</button>
      ) : (
        <button onClick={handleLogin}>Iniciar sesión</button>
      )}
    </div>
  );
};

export default Start;
