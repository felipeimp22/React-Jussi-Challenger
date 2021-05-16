import React from 'react';
import { Link } from 'react-router-dom'
import Register from '../../components/Register';
const PagesRegister = () => (
  <div>
    <Register />
    <Link className="link" style={{ color: "#757575", marginLeft: "60vw" }} to="/">  Voltar</Link>
  </div>
);

export default PagesRegister;