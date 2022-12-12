export const queryTreeById = (tree, id) => {
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

export const queryTreeBypath = (tree, path) => {
  let isGet = false;
  let retNode = null; 
  const deepSearch  = (tree, path)  =>{
    for(let i=0; i< tree.length; i++) {
      if(tree[i].children && tree[i].children.length > 0){
        deepSearch(tree[i].children, path)
      }
      if(path.includes(tree[i]?.path) || isGet){
        isGet||(retNode = tree[i]);
        isGet = true;
        break;
      }
    }
  }
  deepSearch(tree, path)
  return retNode
}


export function getParentId(tree,id) {
  for (let i in tree) {
    if(tree[i].id === id){
    return [tree[i].id]
  }
  if(tree[i].children){
    let node=getParentId(tree[i].children,id);
    if(node!==undefined){
        return node.concat(tree[i].id)
       }
  }
  }        
}

