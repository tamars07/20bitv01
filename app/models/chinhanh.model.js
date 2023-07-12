module.exports = (sequelize, Sequelize) => {
  const Chinhanh = sequelize.define("chinhanh", {
    diachi: {
      type: Sequelize.STRING
    },
    sodienthoai: {
      type: Sequelize.STRING
    },
    hinhanh: {
      type: Sequelize.STRING
    }
  });

  return Chinhanh;
};
