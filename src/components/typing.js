import React, { useState, useEffect } from 'react';
const Typing = ({ 
  text = "Thiago Araujo",
  velocidade = 100,
  className = ""
}) => {
  const [textoAtual, setTextoAtual] = useState('');
  const [indice, setIndice] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      if (indice < text.length) {
        setTextoAtual(prev => prev + text[indice]);
        setIndice(prev => prev + 1);
      }
    }, velocidade);

    return () => clearInterval(intervalo);
  }, [text, velocidade, indice]);

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