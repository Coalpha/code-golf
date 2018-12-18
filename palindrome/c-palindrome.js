palindrome=(s,q=s.replace(/[\W]/g,'').toLowerCase(),i=q.length,I=0)=>{while(i-->I){if(q[i]!=q[I++]){return !1}};return !0}
