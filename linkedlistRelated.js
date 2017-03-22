/**
 * Write a program to find the node at which the intersection of two singly linked lists begins.
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  if (headA && headB) {
    let currA = headA,
      currB = headB
    while (currA !== currB) {
      currA = currA === null ? headB : currA.next;
      currB = currB === null ? headA : currB.next;
    }
    return currA
  }
  return null
};
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if (head) {
    let oneStep = head,
      twoSteps = head
    while (oneStep.next !== null && twoSteps.next !== null && twoSteps.next.next !== null) {
      oneStep = oneStep.next
      twoSteps = twoSteps.next.next
      if (oneStep === twoSteps) {
        return true
      }
    }
    return false
  }
  return false
};
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
  node.val = node.next.val
  node.next = node.next.next
};
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  if (head) {
    let curr = head
    while (curr.next !== null) {
      if (curr.val === curr.next.val) {
        curr.next = curr.next.next
      } else {
        curr = curr.next
      }
    }
    return head
  }
  return null
};
/**
 * Given a list, rotate the list to the right by k places, where k is non-negative.
 * Given 1->2->3->4->5->NULL and k = 2,
 * return 4->5->1->2->3->NULL.
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if (head && k >= 0) {
    if (k === 0) {
      return head
    } else {
      let tail = head
      length = 1
      while (tail.next !== null) {
        tail = tail.next
        length++
      }
      tail.next = head
      for (let i = 0; i < length - k % length; i++) {
        tail = tail.next
      }
      let newHead = tail.next
      tail.next = null
      return newHead
    }
  }
  return null
};
