function dayToGo(TargetDay) {
  const firstDate = new Date(TargetDay);
  if (!isNaN(firstDate.getTime())) {
    const oneDay = 24 * 60 * 60 * 1000;
    const secondDate = new Date();
    const diffDays = Math.round((firstDate - secondDate) / oneDay);
    if (diffDays <= 0) {
      return "Berakhir";
    }
    return diffDays + " Hari";
  }
  return "Tanpa batas";
}

export default dayToGo;
