const AbstractManager = require("./AbstractManager");

class ProjectTechnologyManager extends AbstractManager {
  static table = "project_technology";

  insert(technology) {
    return this.connection.query(
      `insert into ${ProjectTechnologyManager.table} (name), values (?),`,
      [technology.name]
    );
  }

  update(technology) {
    return this.connection.query(
      `update ${ProjectTechnologyManager.table} set name = ? where id = ?`,
      [technology.name, technology.id]
    );
  }
}

module.exports = ProjectTechnologyManager;
