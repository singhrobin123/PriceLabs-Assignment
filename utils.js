
const searchObjectForKey = (data, targetKey) => {
    for (let key in data) {
      if (key === targetKey) {
        return data[key];
      } else if (typeof data[key] === 'object') {
        const result = searchObjectForKey(data[key], targetKey);
        if (result !== undefined) {
          return result;
        }
      }
    }
};
  
  module.exports = { searchObjectForKey };
  