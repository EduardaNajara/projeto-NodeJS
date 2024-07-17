export function contaPalavras(texto) {
  const paragrafos = extraiParagrafos(texto);
  const contagem = paragrafos.flatMap((paragrafo) => {
    if (!paragrafo) return [];
    return verificaTextoDuplicado(paragrafo);
  });
  return contagem;
}

function extraiParagrafos(texto) {
  return texto.toLowerCase().split("\n");
}

function limpaPalavras(palavra) {
  return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
}

function verificaTextoDuplicado(texto) {
  const listaPalavras = texto.split(" ");
  const resultado = {};
  listaPalavras.forEach((palavra) => {
    const palavraLimpa = limpaPalavras(palavra);
    if (palavra.length >= 3) {
      resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) + 1;
    }
  });
  return resultado;
}

