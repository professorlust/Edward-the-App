module.exports = function (sequelize, DataTypes) {
  return sequelize.define('section_order', {
    ownerGuid: {
      allowNull: false,
      type: DataTypes.UUID
    },
    order: {
      allowNull: false,
      type: DataTypes.ARRAY(DataTypes.UUID)
    }
  })
}