const productModel=require('../models/product');
module.exports={
    GetAll:(req,res)=>{
        try{
           productModel.find().then((products)=>{
            return res.status(200).json(products);
        });
        }
        catch
        {
            return res.status(500).json({msg:"500 server error"});
        }
    },
    GetById:(req,res)=>{
        try{
             productModel.find({pid:req.params.id}).then((products)=>{
            let prodid=req.params.id;
            return res.status(200).json(product);
        });
    }
        catch
        {
            return res.status(500).json({msg:"500 server error"});
        }
        },
        AddNew:(req,res)=>{
            // try{
                productModel.insertMany([req.body]).then((data)=>{ 
                return res.status(200).json(data);
            });
        // }
        //     catch
        //     {
        //         return res.status(500).json({msg:"500 server error"})
        //     }
        },
        updateById:(req,res)=>{
            try{
               productModel.updateMany({pid:req.params.id},req.body).then((data)=>{
                return res.status(200).json(data);
               });
            }
            catch
            {
                return res.status(500).json({msg:"500 server error"});
            }
        },
        deletById:(req,res)=>{
            try{
              productModel.deleteOne({pid:req.params.id}).then((data)=>{
                return res.status(200).json(data);
              })
               
            }
            catch
            {
                return res.status(500).json({msg:"500 server error"});
            }
        },
    }    

