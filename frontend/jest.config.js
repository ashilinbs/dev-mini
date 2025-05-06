// filepath: c:\Users\Asus\OneDrive\Documents\22csr024\devops-project2\frontend\jest.config.js
export default {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['./jest.setup.js'], // Add this line
};