orderings=(a,r=[],f=(m,c=[])=>(m.length?m.map((s,i,_,M=m.slice(),C=c.slice())=>{C.push(M.splice(i,1)[0]);f(M,C)}):r.push(c.join``),r))=>f(a)
