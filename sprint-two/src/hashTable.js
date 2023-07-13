var HashTable = function () {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function (k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};

HashTable.prototype.retrieve = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};

HashTable.prototype.remove = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || [];
};

HashTable.prototype._resize = function (newLimit) {};
// var table = new HashTable();
// table.insert("cat");
// table.insert("dad");
// table.insert("food");
// table.insert("loop");
// table.insert("soop");
// table.insert("root");
// table.insert("dump");
// table.insert("far");
// table.insert("tar");
// table.insert("kamp");
// table.insert("less");
// console.log(table._storage.find());
