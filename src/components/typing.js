import React, { useState, useEffect } from 'react';

const Typing = ({
  text = "Thiago Araujo",
  velocidade = 100,
  delay = 5000, // tempo antes de repetir
  className = ""
}) => {
  const [textoAtual, setTextoAtual] = useState("");
  const [indice, setIndice] = useState(0);
  const [reiniciar, setReiniciar] = useState(false);

  useEffect(() => {
    let timeout;

    // digitando
    if (indice < text.length) {
      timeout = setTimeout(() => {
        setTextoAtual((prev) => prev + text[indice]);
        setIndice((prev) => prev + 1);
      }, velocidade);
    } 
    // terminou de digitar → espera e reinicia
    else {
      timeout = setTimeout(() => {
        setTextoAtual("");
        setIndice(0);
        setReiniciar(!reiniciar);
      }, delay);
    }

    return () => clearTimeout(timeout);
  }, [indice, text, velocidade, delay, reiniciar]);

  return (
    <span className={`inline-block relative font-medium ${className}`}>
      {textoAtual}
      <span
        className="inline-block w-0.5 h-5 bg-foreground ml-0.5 align-middle animate-[blink_1s_infinite]"
        aria-hidden="true"
      />
    </span>
  );
};

export default Typing;
