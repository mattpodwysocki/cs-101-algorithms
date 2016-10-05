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

    let second = head.next;
    head.next = null;
    let rest = Node.reverse(second);
    second.next = head;

    return result;
  }
}

module.exports = {
  Node
};
