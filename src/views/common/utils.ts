export const getPriorityColor = (priority: number) => {
  switch (priority) {
    case 2:
      return 'blue'
    case 3:
      return 'orange'
    case 4:
      return 'red'
    default:
      return '#808080'
  }
}
