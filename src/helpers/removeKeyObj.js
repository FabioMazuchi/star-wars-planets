function removeKeyObj(array, key) {
  const data = array.map((element) => {
    delete element[key];
    return element;
  });
  return data;
}

export default removeKeyObj;
