module.exports = (sequelize, Sequelize) => {
    const restaurant = sequelize.define("restaurant",  {
     restId:{
          field:'restId',
          type:Sequelize.INTEGER,
          primaryKey:true,
          autoIncrement:true
      },
      restName: {
        field:'restName',
        type: Sequelize.STRING
      },
      restAddress: {
        field:'restAddress',
        type: Sequelize.STRING
      },
      },{
        freezeTableName: true, // Model tableName will be the same as the model name
        timestamps: false,
        underscored: true
    });
   
    return restaurant;
  };