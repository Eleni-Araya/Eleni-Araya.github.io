
export { sumTo, factorial, fibonacci, outputList, outputListLoop, reverseList, reverseListLoop, TreeNode, sumTreeValues }

type List = {
    value: number;
    next: List | null;
}

function sumTo(n: number): number {
    if (n == 1) return 1;
    return n + sumTo(n - 1);
}

function factorial(n: number): number {
    if (n == 1 || n == 0) {
        return 1;
    }

    return n * factorial(n - 1);
}
function fibonacci(n: number): number {
    if (n == 1 || n == 0) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

let valAccumlator:string="";
function outputList(list:List):string{
    if(list.next===null){
        console.log(list.value+" printed to console");
        valAccumlator+=list.value+" printed to console"
    }else{
        valAccumlator+=list.value+" ";
        outputList(list.next)
    }
    return valAccumlator;
}
// function outputList(list: List):string {
//     console.log(list.value+"printed to console");
//     if (list.next != null) {
//         outputList(list.next)
//     }
// }
function reverseList(list: List) {
    if (list.next == null) {
        console.log(list.value);
        return;
    }
    return reverseList(list.next);
    console.log(list.value);
}
function outputListLoop(list:List) {
    for (let node in list) {
        console.log(Object.values(node));
    }
}
function reverseListLoop(list:List){
    const arr: number[] = [];
  for (let node: List | null = list; node !== null; node = node.next) {
    arr.push(node.value);
  }
  for (let i in arr.reverse()) {
    console.log(arr[i]);
  }
}


type TreeNode = {
    value: number;
    left: TreeNode | null;
    right: TreeNode | null;
}

function sumTreeValues(binaryTree: TreeNode | null): number {
    if (binaryTree == null) {
        return 0;
    }
    return binaryTree.value + sumTreeValues(binaryTree.left) + sumTreeValues(binaryTree.right)

}