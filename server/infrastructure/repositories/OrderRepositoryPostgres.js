'use strict';

const sequelize = require('../orm/sequelize/sequelize');
const Order = require('../../domain/Orders');
const OrderRepository = require('../../domain/OrdersRepository');
 
module.exports = class extends OrderRepository {

  constructor() {
    super();
    this.db = sequelize;
    this.model = this.db.model('orders');
  }

  async persist(orderEntity) {

    const { order_date, order_products} = orderEntity;

    const seqOrder = await this.model.create({ order_date, order_products });

    let order = new Order(seqOrder.order_date, seqOrder.order_products);

    return order

  }

//   async merge(orderEntity) {
//     const seqUser = await this.model.findByPk(orderEntity.id);

//     if (!seqUser) return false;

//     const { full_name, last_name, email, pass, upgrade_time, last_entry, status, admin, parent_id } = orderEntity;
//     await seqUser.update({ full_name, last_name, email, pass, last_entry, status, admin, parent_id, upgrade_time },  {where: {id: orderEntity.id}});

//     return new User(seqUser.id, seqUser.full_name, seqUser.last_name, seqUser.email, seqUser.pass, seqUser.register_time, seqUser.last_entry, seqUser.status, seqUser.admin, seqUser.parent_id, seqUser.upgrade_time);
//   }

//   async remove(userId) {
//     const seqUser = await this.model.findByPk(userId);
//     if (seqUser) {
//       return seqUser.destroy();
//     }
//     return false;
//   }

//   async get(userId) {
//     this.db.import('./../orm/sequelize/models/CvAcademicInfo');
//     this.db.import('./../orm/sequelize/models/CvWorkInfo');

//     const CvPersonalInfo = this.db.model('cv_personal_info');
//     const CvAcademicInfo = this.db.model('cv_academic_info');
//     const CVWorkInfo = this.db.model('cv_work_info');
    
//     CvPersonalInfo.belongsTo(this.model, {foreignKey : 'id_user', as : 'usuario'})
//     CvPersonalInfo.hasMany(CvAcademicInfo, {foreignKey : 'id_cv_user', as : 'informacionacademica'})
//     CvPersonalInfo.hasMany(CVWorkInfo, {foreignKey: 'id_cv_user', as: 'infolaboral'})

//     this.model.hasOne(CvPersonalInfo, {foreignKey : 'id_user', as : 'cv'})
    
//     const seqUser = await this.model.findByPk(userId, {
//       include : [{
//         model : CvPersonalInfo, 
//         as : 'cv', 
//         attributes : ['document'], 
//         include : [{
//           model : CvAcademicInfo, 
//           as : 'informacionacademica',          
//         }, {
//           model: CVWorkInfo,
//           as: 'infolaboral'
//         }],
//       }]
//     });
//     const result = await CvPersonalInfo.findAll({
//       include : [{
//         model : this.model, 
//         as : 'usuario', 
//         attributes : ['full_name','email']
//       },]
//     })
    
//   //  result.map(row => console.log(row))

//    // console.log(seqUser.cv.informacionacademica)
        
//     if(seqUser)
//       return new User(seqUser.id, seqUser.full_name, seqUser.last_name, seqUser.email, seqUser.pass, seqUser.register_time, seqUser.last_entry, seqUser.status, seqUser.admin, seqUser.parent_id, seqUser.upgrade_time, seqUser.mobile_phone, seqUser.cv);
//     else
//       return false;
//   }

//   async getByEmail(userEmail) {
//     const seqUser = await this.model.findOne({ where: { email: userEmail } });
//     return new User(seqUser.id, seqUser.full_name, seqUser.last_name, seqUser.email, seqUser.pass, seqUser.register_time, seqUser.last_entry, seqUser.status, seqUser.admin, seqUser.parent_id, seqUser.upgrade_time);
//   }

//   async find() {
//     const seqUsers = await this.model.findAll();
//     return seqUsers.map((seqUser) => {
//       let x = new User(seqUser.id, seqUser.full_name, seqUser.last_name, seqUser.email, seqUser.pass, seqUser.register_time, seqUser.last_entry, seqUser.status, seqUser.admin, seqUser.parent_id);
//       return x;
//     });
//   }

};
