import { Form, Container, Button, InputGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";
import TextWarningForm from "../components/TextWarningForm";
import { useEffect } from "react";
import { useAttributes } from "../context/Attributes/AttributesContext";
import { ModalComponent } from "../components/Modal";
import {
  ModalContextProvider,
  useModal,
} from "../context/components/ModalContext";
export default function NewDocument() {
  const {handleShow} = useModal();
  const { typesDocuments, processes, getAttributes } = useAttributes();
  useEffect(() => {
    getAttributes({
      nameTable: "types_documents",
      columns: "id,name",
      type: "GET_TYPES_DOCUMENTS",
    });
    getAttributes({
      nameTable: "process",
      columns: "id,name",
      type: "GET_PROCESSES",
    });
  }, []);
  const onSubmit = (data) => {
    console.log(data);
  };
  const onError = (error) => {
    console.log(error);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    
      <Container className="mt-5" style={{ maxWidth: "450px" }}>
        <h2 className="mb-4 text-primary">
          <i className="bi bi-file-earmark-plus me-2"></i>Nuevo documento
        </h2>
        <Form onSubmit={handleSubmit(onSubmit, onError)}>
          <Form.Group className="mb-3">
            <Form.Label>Nombre del documento</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nombre del documento"
              {...register("nombre", {
                required: {
                  value: true,
                  message: "El nombre es requerido",
                },
              })}
            />
            {errors.nombre && (
              <TextWarningForm message={errors.nombre.message} />
            )}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              type="text"
              placeholder="Descripción del documento"
              {...register("descripcion")}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Tipo de documento</Form.Label>
            <InputGroup className="mb-3">
              <Form.Select
                aria-label="Default select example"
                {...register("tipo", {
                  required: {
                    value: true,
                    message: "El tipo de documento es requerido",
                  },
                })}
              >
                <option value="">Seleccione un tipo de documento</option>
                {typesDocuments.map((type) => (
                  <option key={`${type.id}-${type.name}`} value={type.id}>
                    {type.name}
                  </option>
                ))}
              </Form.Select>
              <Button variant="outline-secondary" onClick={handleShow}>
                <i className="bi bi-plus-lg"></i>
              </Button>
            </InputGroup>

            {errors.tipo && <TextWarningForm message={errors.tipo.message} />}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Proceso</Form.Label>
            <Form.Select
              aria-label="Default select example"
              {...register("proceso", {
                required: {
                  value: true,
                  message: "El proceso es requerido",
                },
              })}
            >
              <option value="">Seleccione un proceso</option>
              {processes.map((process) => (
                <option
                  key={`${process.id}-${process.name}`}
                  value={process.id}
                >
                  {process.name}
                </option>
              ))}
            </Form.Select>
            {errors.proceso && (
              <TextWarningForm message={errors.proceso.message} />
            )}
          </Form.Group>
          <Button className="w-100" variant="primary" type="submit">
            Guardar
          </Button>
        </Form>
        <ModalComponent title='Nuevo tipo de docuemnto' body='Crear un nuevo tipo de docuemnto' btnText ='Guardar'/>
      </Container>
  );
}
