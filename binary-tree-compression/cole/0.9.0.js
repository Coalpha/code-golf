function binaryCompression(string) {
  const tree = [];
  const done = {};
  let pass;
  function addToTree(index, value) {
    if (tree[index]) {
      tree[index].push(value);
    } else {
      tree[index] = value;
    }
  }
  string.split``.forEach((chara) => {
    if (!done[chara]) {
      const occ = string.match(new RegExp(chara, 'g')).length;
      if (tree[occ]) {
        tree[occ].push(chara);
        done[chara] = 1;
      } else {
        tree[occ] = [chara];
        done[chara] = 1;
      }
    }
  });
  for (const index of Object.keys(tree)) {
    for (;tree[index].length;) {
      if (pass) {
        addToTree(+pass.index + +index, [tree[index].shift(), pass.value]);
        pass = 0;
      } else if (tree[index].length > 1) {
        const pair = [tree[index].shift(), tree[index].shift()];
        addToTree(index * 2, pair);
      } else {
        pass = {
          index,
          value: tree[index].shift(),
        };
      }
    }
    delete tree[index];
  }
  return pass ? tree[Object.keys(tree)[0]] : [tree[Object.keys(tree)[0]], pass.value];
}
