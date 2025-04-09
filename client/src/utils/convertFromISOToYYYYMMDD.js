export const convertFromISOToYYYYMMDD = (isoString) => {
  return isoString ? new Date(isoString).toISOString().split("T")[0] : "";
};
