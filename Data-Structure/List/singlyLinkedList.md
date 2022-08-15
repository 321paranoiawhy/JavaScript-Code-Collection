# `Singly Linked List`

## Clone Data-Structure/List

```bash
# before init, set current working directory to the directory specified
# cd ...
git init test # init

cd test

git remote add -f origin https://github.com/321paranoiawhy/JavaScript-Code-Collection/tree/master/Data-Structure/List # remote add

git config core.sparsecheckout true # core.sparsecheckout

echo "Data-Structure/List" >> .git/info/sparse-checkout

git pull origin master # pull
```

Reference:

* [git 克隆指定的文件和目录](https://longzeping.github.io/2018/08/09/git%E5%85%8B%E9%9A%86%E6%8C%87%E5%AE%9A%E7%9A%84%E6%96%87%E4%BB%B6%E5%92%8C%E7%9B%AE%E5%BD%95/)
* [git clone仓库的一个子目录](https://zhuanlan.zhihu.com/p/57390306)
* [稀疏检出和浅克隆](https://www.worldhello.net/gotgit/08-git-misc/090-sparse-checkout-and-shallow-clone.html)
* [git-sparse-checkout](https://git-scm.com/docs/git-sparse-checkout)

## Usage

### Create a new `Singly Linked List`

```JavaScript
// test.js
const { SinglyLinkedList } = require("./singlyLinkedList.js");

// create a instance
let list = new SinglyLinkedList();
```

### size property

```JavaScript
// get the size of list
list.size;
```

### push(data)

```JavaScript
// push 1 to the tail of list
list.push(1);
// push in chain
list.push(1).push(2).push(3);
```

### multiplePush()

```JavaScript
// push 1 2 3 to the tail of list in order
list.multiplePush(1, 2, 3);
```

### get(index)

```JavaScript
// get element at index 0
list.get(0);
```

### removeAt(index)

```JavaScript
// remove element at index 0
list.removeAt(0);
```

### remove(data)

```JavaScript
// remove element whose value is 1
list.remove(1);
```

### insert(data, index)

```JavaScript
// insert element(whose value is 1) at index 0
list.insert(1, 0);
```

### has(data)

```JavaScript
// check data is in list or not
list.insert(1, 0);
```

### indexOf(data)

```JavaScript
// find index of data in list
list.indexOf(1);
```

### lastIndexOf(data)

```JavaScript
// find last index of data in list
list.lastIndexOf(1);
```

### reverse()

```JavaScript
// reverse list
list.reverse();
```

### clear()

```JavaScript
// clear list (remove all elements)
list.clear();
```

### isEmpty()

```JavaScript
// check list is empty or not
list.clear();
```

### getHead()

```JavaScript
// get head of list
list.getHead();
// or, list[head]
list[head];
```

### toString()

```JavaScript
// convert list to a string representation
list.toString();
```

### Turn `list` to `Array`

```JavaScript
// convert list to Array
[...list];
```