// Define the Base62 characters
const base62Chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

// Base62 Encode function
function base62Encode(number) {
  if (number === 0) return base62Chars[0];
  let encoded = '';
  const base = base62Chars.length;
  
  while (number > 0) {
    encoded = base62Chars[number % base] + encoded;
    number = Math.floor(number / base);
  }
  
  return encoded;
}

// Simple hash function to convert a URL into a numeric value
function simpleHash(url) {
  let hash = 0;
  for (let i = 0; i < url.length; i++) {
    hash = url.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash); // Ensure the hash is a positive number
}

// Generate a shortened URL part using Base62 encoding
function generateShortUrl(url) {
  const hash = simpleHash(url);
  return base62Encode(hash);
}

// Export the functions as a module
module.exports = generateShortUrl;
