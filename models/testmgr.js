var dbmgr = require("./dbmgr");
var db = dbmgr.db;

exports.getNames = () => {
    const sql = "SELECT * FROM names";
    let stmt = db.prepare(sql);
    let res = stmt.all();
    return res;
}