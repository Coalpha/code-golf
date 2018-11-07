arrayPairs=(a,b,c=b.slice(),d=[])=>(a.map(v=>~(b=c.indexOf(v))&&d.push(c.splice(b,1)[0])),d)
