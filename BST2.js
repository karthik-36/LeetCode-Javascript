function node(val){
this.value = val;
this.left = null;
this.right = null;
}


function Tree(){

  this.root = null;

}


Tree.prototype.addNode = function(n){

if(this.root == null){
  this.root = n;
}

}



var n = new node(5);
var tree = new Tree();
tree.addNode(n);
