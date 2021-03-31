(a=new Function("let f=arguments.callee,w=self,n=f.a+"_";w[n]=new Function(([]+f).slice(26,-1));w[n].a=n;delete w[f.a];")).a='a';
