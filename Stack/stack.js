'use strict';

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this._top = null;
  }

  pop() {
    if (!this._top) {
      throw new Error('Empty stack');
    }

    const item = this._top.data;
    this._top = this._top.next;
    return item;
  }

  push(item) {
    const node = new Node(item);
    node.next = this._top;
    this.top = node;
  }

  peek() {
    if (!this._top) {
      throw new Error('Empty stack');
    }

    return this._top.data;
  }

  isEmpty() {
    return this._top == null;
  }
}

module.exports = {
  Stack
};
