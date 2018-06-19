countSort=(a,o={},A=[[]])=>{
  a.map(v=>o[v]=~~o[v]+1);
  Object.keys(o).map(k=>{
    const v = o[k];
    if (!A[v]) {
      A[v] = [k];
    } else {
      A[v].push(k);
    }
  });
  return A.map(v=>v.sort()).reverse().map(());
}
["app","car","bub","app","ded","app","app","car"];
