const { DEFAULT_ECDH_CURVE } = require("tls");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'primary': {
        DEFAULT:'#356aff',
        'bg':'#f5f5f5',
        'text':'#ffffff'
      },
      'light':{
        DEFAULT:'#ffffff',
        'text':'#cdccd1',
      },
      'text': '#111116',
    },
  },
  plugins: [],
}