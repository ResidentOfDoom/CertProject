export const formatAsISO = (dateString) =>
  dateString ? new Date(dateString).toISOString() : null;
