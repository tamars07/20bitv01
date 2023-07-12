module.exports = (sequelize, Sequelize) => {
  const Monan = sequelize.define("monan", {
    ten: {
      type: Sequelize.STRING
    },
    gia: {
      type: Sequelize.FLOAT
    },
    mota: {
      type: Sequelize.STRING
    },
    hinhanh: {
      type: Sequelize.STRING
    }
  });

  return Monan;
};
