function orderings(a) {
  const resAry = [];
  function recurse(remainder, consumed = []) {
    if (remainder.length) {
      remainder.map((string, index) => {
        const remainderCopy = remainder.slice();
        const consumedCopy = consumed.slice();
        consumedCopy.push(remainderCopy.splice(index, 1)[0]);
        recurse(remainderCopy, consumedCopy);
      });
    } else {
      resAry.push(consumed.join(''));
    }
    return resAry;
  }
  return recurse(a);
}
orderings(['foo', 'bar', 'baz', 'qux']);
