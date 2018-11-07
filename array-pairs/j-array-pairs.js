arrayPairs=(a,b,i=0)=>a.map((t,w)=>!!(w=b.indexOf(t,i)+1)&&(i=w,t)).filter(a=>a!==false);
