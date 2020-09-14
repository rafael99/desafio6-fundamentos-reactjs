const formatDate = (datetime: Date): string => {
  const date = new Date(datetime);
  return Intl.DateTimeFormat('pt-br').format(date);
};
export default formatDate;
