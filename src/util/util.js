export const queryTree = (tree, id) => {
  let isGet = false;
  let retNode = null; 
  const deepSearch  = (tree, id)  =>{
    for(let i=0; i< tree.length; i++) {
      if(tree[i].children && tree[i].children.length > 0){
        deepSearch(tree[i].children, id)
      }
      if(tree[i].id === id || isGet){
        isGet||(retNode = tree[i]);
        isGet = true;
        break;
      }
    }
  }
  deepSearch(tree, id)
  return retNode
}