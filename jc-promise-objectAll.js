objectAll=async (o,k=Object.keys(o),n={})=>((await Promise.all(k.map(K=>o[K]))).forEach((v,i)=>n[k[i]]=v),n)
