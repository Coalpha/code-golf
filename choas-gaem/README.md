# choas gaem

On 27 April 2017, Numberphile released
[a video about the Chaos Game](https://www.youtube.com/watch?v=kbKtFN71Lfs).
And well, it was incredible to see that Sierpinski triangle generate from such a
simple set of rules. At school, Marcus and I decided to code golf it, or something.
I don't actually really remember the day but I probably made it and he started
suggesting ways to svchrs. Since that video, several improvements were made up
until around the summer of 2019 where the final improvements were made.


## svschrs

#### tagged function calls

```js
c.getContext("2d")
c.getContext`2d`
```

#### tag auto closing

```html
<style>*{margin:0;overflow:hidden;background:#000}</style>
<style>*{margin:0;overflow:hidden;background:#000}
```

#### setInterval tagged eval

```js
setInterval(_=>o=s[R(3)];p(C=[m(0),m(1)]),9)
setInterval`o=s[R(3)];p(C=[m(0)${9}m(1)])`
```

#### integer division by zero

```js
/2|0
>>1
```
