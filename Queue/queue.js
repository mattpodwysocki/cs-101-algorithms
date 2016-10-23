'use strict';

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this._first = null;
    this._last = null;
  }

  shift(item) {
    const node = new Node(item);
    if (!this._last) {
      this._last.next = node;
    }

    this._last = node;

    if (!this._first) {
      this._first = this._last;
    }
  }

  unshift() {
    if (!this._first) { 
      throw new Error('Empty queue');
    }

    const data = this._first.data;
    this._first = this._first.next;
    if (!this._first) {
      this._last = null;
    }

    return data;
  }

  peek() {
    if (!this._first) { 
      throw new Error('Empty queue');
    }

    return this._first.data;
  }

  isEmpty() {
    return this._first == null;
  }
}

module.exports = {
  Queue
};
