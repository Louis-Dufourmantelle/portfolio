const AbstractManager = require("./AbstractManager");

class TechnologyManager extends AbstractManager {
  static table = "technology";

  insert(project) {
    return this.connection.query(
      `insert into ${TechnologyManager.table} (name), values (?),`,
      [project.title, project.description, project.date, project.link]
    );
  }

  update(project) {
    return this.connection.query(
      `update ${TechnologyManager.table} set name = ? where id = ?`,
      [project.name, project.id]
    );
  }
}

module.exports = TechnologyManager;
