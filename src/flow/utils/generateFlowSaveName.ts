export const generateFlowSaveName = (): string => {
  const currentDate = new Date();

  const dateString = currentDate.toDateString();
  const currentTime = currentDate.toTimeString().slice(0, 8);

  return `Flow ${dateString} ${currentTime}.json`;
};
