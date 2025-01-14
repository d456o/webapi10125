const experss=require('express');
const router=experss.Router();
const {GetAll,GetById,AddNew,updateById,deletById}=require('../conttrolles/product');

router.get('/',GetAll);
router.get('/:id',GetById);
router.post('/',AddNew);
router.put('/:id',updateById);
router.delete('/',deletById);



module.exports=router;
