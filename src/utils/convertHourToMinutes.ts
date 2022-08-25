// CONVERTENDO OS VALORES DE STRING PARA NUMBER NO BANCO DE DADOS

export default function convertHourToMinutes(time: string) {
  const [hour, minutes] = time.split(":").map(Number);
  const timeInMinutes = hour * 60 + minutes;

  return timeInMinutes;
}
