class StringGenerator {
    static generateRandomAlphabeticString(length) {
      const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      const startIndex = 0;
      const endIndex = characters.length;
  
      return Array.from({ length }, () => {
        const randomIndex = Math.floor(Math.random() * (endIndex - startIndex) + startIndex);
        return characters.charAt(randomIndex);
      }).join('');
    }
  } export default StringGenerator