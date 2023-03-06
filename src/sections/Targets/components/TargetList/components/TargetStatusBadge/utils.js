export const getStatusBadgeColor = (status) => {
  switch (status) {
    case 'finished':
      return '#9DFECE'
    case 'inProgress':
      return '#FEDD9D';
    default:
      return '#0000001A';
  }
};

export const getStatusBadgeText = (status, finalDate) => {
  switch (status) {
    case 'finished':
      return 'Выполнено'
    case 'inProgress':
      return `В процессе до ${finalDate}`;
    default:
      return 'Скоро';
  }
};