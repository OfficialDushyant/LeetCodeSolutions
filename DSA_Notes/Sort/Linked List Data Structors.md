
So lets go to our real first data structor

So What sucks about Array?
- Deletion - because you have to set 0 or null but memory is still not free
- Insertion 
- its not dynamic size is fixed a t declaration.

**Linked List**
How dose it work 
- Singly linked 
- Doubly linked

 
![[linkedList.png]]

**Updating values in the linked list or Doubly linked list**

1. Inserting new value in to the linked list or doubly liked list happens in constant time (REF [[Big O Time Complexity]]). 
![[linkedList-insert.png]]

2. Deleting the value form the linked list is also constant time (REF [[Big O Time Complexity]] ). We will be breaking the existing links to the value we want to delete and re create the links with next node.

**Getting a value from the the linked list**
- Getting a head / tail : Getting a head or a tail value of a linked list is a constant time complexity as it does not depend on how big is the list.
- Getting a value in general on the other hand requires you to traverse through the list till you find the value.