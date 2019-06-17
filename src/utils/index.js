const handleChange = callback => {
  return e => callback(e.currentTarget.value);
};
