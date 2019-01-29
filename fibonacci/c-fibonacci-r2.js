fibonacci=n=>[...Array(n)].map((v,i,a)=>a[i]=i?~~a[i-2]+a[i-1]:1)
