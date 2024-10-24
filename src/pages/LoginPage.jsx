import { Card, Button, Form, Alert } from "react-bootstrap";
import Icon from "../assets/dev-modules-icon.png";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../context/Auth/AuthContext";
export default function Login() {
  const { userSession, getSession, login } = useAuth();
  const [errorAuth, setErrorAuth] = useState(null);
  const navigate = useNavigate();
  //sass3nach89
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (dataLogin) => {
    const rsp = await login(dataLogin);
    if(!rsp.session) {
      setErrorAuth(rsp)
    }
  };

  const onError = (errors) => {
    console.log(errors);
  };
  useEffect(() => {
    getSession();
  }, []);
  useEffect(() => {
    if (userSession) return navigate("/");
  }, [userSession]);
  return (
    <div className="center-div">
      {errorAuth && <Alert variant="danger" className="alert--error">{errorAuth}</Alert>}
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={Icon}
          style={{ width: "140px", margin: "auto" }}
        />
        <Card.Body>
          <Card.Title className="text-center mb-3">Login</Card.Title>
          <Form
            onSubmit={handleSubmit(onSubmit, onError)}
            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            <Form.Group controlId="email">
              <Form.Label>Correo electronico</Form.Label>
              <Form.Control
                type="email"
                placeholder="micorreo@ejemplo.com"
                {...register("email", {
                  required: { value: true, message: "Debe ingresar un correo" },
                })}
              />
              {errors.email && (
                <span className="form-text text-danger">
                  {errors.email.message}
                </span>
              )}
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Debe ingresar un contraseña",
                  },
                })}
              />
              {errors.password && (
                <span className="form-text text-danger">
                  {errors.password.message}
                </span>
              )}
            </Form.Group>
            <Button variant="primary-dark" type="submit">
              Ingresar
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
