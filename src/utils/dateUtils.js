const FormatDate = (date) => {
    const d = new Date(date);
    const formatted = `${d.getDate()} ${d.toLocaleString('default', { month: 'long' })}, ${d.getFullYear()}`;
    return formatted;
  };
  
  export { FormatDate };
  