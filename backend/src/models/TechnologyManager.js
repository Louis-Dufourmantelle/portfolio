const AbstractManager = require("./AbstractManager");

class TechnologyManager extends AbstractManager {
  static table = "technology";

  insert(technology) {
    return this.connection.query(
      `insert into ${TechnologyManager.table} (name), values (?),`,
      [technology.name]
    );
  }

  update(technology) {
    return this.connection.query(
      `update ${TechnologyManager.table} set name = ? where id = ?`,
      [technology.name, technology.id]
    );
  }
}

module.exports = TechnologyManager;
