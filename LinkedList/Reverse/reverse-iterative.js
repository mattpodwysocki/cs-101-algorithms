'use strict';

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.previous = null;
    this.next = null;
  }

  static reverse(head) {
    if (head == null || head.next == null) {
      return head;
    }

    let p1 = head;
    let p2 = p1.next;

    head.next = null;
    while (p1 != null && p2 != null) {
      let t = p2.next;
      p2.next = p1;
      p1 = p2;
      p2 = t;
    }

    return p1;
  }
}

module.exports = {
  Node
};
