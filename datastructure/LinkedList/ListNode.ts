export interface ListNode<T> {
  val: T;
  next: ListNode<T> | null;
}

export const CreateListNode = <T>(array: T[]): ListNode<T> | null => {
  if (array.length === 0) return null;

  const head: ListNode<T> = {
    val: array[0],
    next: null,
  };
  let tail = head;

  for (let i = 1; i < array.length; ++i) {
    const node: ListNode<T> = {
      val: array[i],
      next: null,
    };

    tail.next = node;
    tail = node;
  }
  return head;
};

export default ListNode;
