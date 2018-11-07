arrayPairs=(a,b,c=b.slice())=>a.reduce((d,t,w)=>~(w=c.indexOf(t))?d.concat(c.splice(w,1)):d,[])
