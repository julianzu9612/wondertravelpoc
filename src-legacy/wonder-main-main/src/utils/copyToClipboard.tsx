const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    alert('Texto copiado al portapapeles');
  } catch (err) {
    console.error('Error al copiar al portapapeles: ', err);
  }
};

export default copyToClipboard;
