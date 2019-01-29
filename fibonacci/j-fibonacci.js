fibonacci=n=>n==1?[1]:Array(n-2).fill``.reduce((a,_,i)=>a.concat(a[i]+a[i+1]),[1,1])
