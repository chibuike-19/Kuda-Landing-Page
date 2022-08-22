module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        slider: '50s slider infinite linear'
      },
      keyframes: {
        slider: {
          '0% - 20%': {
            left: 0        
          },
          '25% - 50%': {
            left: '-50%'
          },
          // '50% - 70%': {
          //   left: '-200%'
          // },
          '55% - 95%': {
            left: '-75%'
          },
          '100%' : {
            left: '-80%'
          },
        },
        
      },
      fontSize: {
        meduim: ['18px', '0px'],
        // sm: ['14px', '20px'],
        // xs: ['12px', '16px'],
        // base: ['16px', '24px'],
        // xl: ['20px', '28px'],
        // xl: ['24px', '34px'],
        // xl: ['20px', '28px'],
        // xl: ['20px', '28px'],
      },
      colors: {
        primary: '#40196d',
      },
      width: {
        wx: "26rem",
        x: "350px",
        xl: "200%",
        avg: "50px",
        lo: "99px",
        sc: "350px"
      },
      height: {
        avg: "50px"
      },
      fontFamily: {
        muli: ['Muli', 'san-sarif']
      },
    },
  },
  plugins: [],
}
