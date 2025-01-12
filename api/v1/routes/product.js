const experss=require('express');
const Router=experss.Router();
const {GetAll,GetById,AddNew,updateById,deletById}=require('../conttrolles/product');
const { router } = require('../../../app');
router.get('/',GetAll);
router.get('/:id',GetById);
router.post('/',AddNew);
router.put('/:id',updateById);
router.delete('/',deletById);



module.exports=router;
