module.exports = {
  content: ['./coleccion-es.html','./up-navidad.html'],
  theme: { extend: {
    fontFamily: { sans:['DM Sans','sans-serif'], display:['Bricolage Grotesque','sans-serif'] },
    colors: { ink:{DEFAULT:'#FFFFFF',card:'#FFFFFF',alt:'#EDE2F5'}, peach:'#9A5AC8', butter:'#9A5AC8', mint:'#5E9A74', rubi:'#B3262E', pinho:'#1F5C46' },
    keyframes: { pulse_btn: {'0%,100%':{boxShadow:'0 0 0 0 rgba(154,90,200,.45)'},'50%':{boxShadow:'0 0 0 14px rgba(154,90,200,0)'}} },
    animation: { pulse_btn:'pulse_btn 2s ease-in-out infinite' }
  }}
};
