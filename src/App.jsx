import { evaluate } from "mathjs";
import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const App = () => {
  const [display, setDisplay] = useState("");
  const [resultado, setResultado] = useState(null);

  const botones = [7, 8, 9, "/", 4, 5, 6, "*", 1, 2, 3, "-", 0, ".", "=", "+"];

  const handleButtonClick = (value) => {
    setDisplay((prevDisplay) => prevDisplay + value);
  };

  const handleEquals = () => {
    try {
      const resultadoCalculado = evaluate(display);
      setResultado(resultadoCalculado);
    } catch (error) {
      setResultado("Error");
    }
  };

  const handlePercent = (porcentaje) => {
    try {
      const valor = evaluate(display);
      const resultadoPorcentaje = valor * porcentaje;
      setResultado(resultadoPorcentaje);
    } catch (error) {
      setResultado("Error");
    }
  };

  const handleClear = () => {
    setDisplay("");
    setResultado(null);
  };
  return (
    <Container fluid className="d-flex justify-content-center mt-3">
      <div className="bg-dark rounded-3 w-25 p-4">
        <Row>
          <Col sm={12} className="mb-3">
            <div className="display rounded-3">
              {resultado !== null ? resultado : display}
            </div>
          </Col>
        </Row>
        <Row>
          {botones.map((value, index) => (
            <Col key={index} sm={3}>
              <Button
                className="fs-2"
                variant="light"
                onClick={() =>
                  value === "=" ? handleEquals() : handleButtonClick(value)
                }
              >
                {value}
              </Button>
            </Col>
          ))}
          <Col sm={3}>
            <Button
              className="fs-2"
              variant="light"
              onClick={() => handlePercent(0.1)}
            >
              10%
            </Button>
          </Col>
          <Col sm={3}>
            <Button
              className="fs-2"
              variant="light"
              onClick={() => handlePercent(0.15)}
            >
              15%
            </Button>
          </Col>
          <Col sm={3}>
            <Button
              className="fs-2"
              variant="light"
              onClick={() => handlePercent(0.2)}
            >
              20%
            </Button>
          </Col>
          <Col sm={3}>
            <Button
              className="fs-2"
              variant="light"
              onClick={() => handlePercent(0.25)}
            >
              25%
            </Button>
          </Col>
          <Col sm={3}>
            <Button
              className="fs-2"
              variant="light"
              onClick={() => handlePercent(0.35)}
            >
              35%
            </Button>
          </Col>
          <Col sm={3}>
            <Button className="fs-2" variant="light" onClick={handleClear}>
              C
            </Button>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default App;
