'use strict';

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.previous = null;
    this.next = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();
    this.head = null;
    this.end = null;
  }

  get(key) {
    if (this.map.has(key)) {
      const node = this.map.get(key);
      this._remove(node);
      this._setHead(node);
      return node.value;
    }
    
    return undefined;
  }

  set(key, value) {
    if (this.map.has(key)) {
      const node = this.map.get(key);
      node.value = value;
      this._remove(node);
      this._setHead(node);
    } else {
      const created = new Node(key, value);
      if (this.map.size >= this.capacity) {
        this.map.delete(this.end.key);
        this._remove(this.end);
        this._setHead(created);
      } else {
        this._setHead(created);
      }

      this.map.set(key, created);
    }
  }

  _remove(node) {
    if (node.previous != null) {
      node.previous.next = node.next;
    } else {
      this.head = node.next;
    }

    if (node.next != null) {
      node.next.previous = node.previous;
    } else {
      this.end = node.previous;
    }
  }

  _setHead(node) {
    node.next = this.head;
    node.previous = null;

    if (this.head != null) {
      this.head.previous = node;
    }

    this.head = node;

    if (this.head == null) {
      this.end = this.head;
    }
  }
}

module.exports = {
  Node,
  LRUCache
};
