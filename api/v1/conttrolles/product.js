module.exports={
    GetAll:(req,res)=>{
        try{
            return res.status(200).json({msg:"all products"});
        }
        catch
        {
            return res.status(500).json({msg:"500 server error"});
        }
    },
    GetById:(req,res)=>{
        try{
            let prodid=req.params.id;
            return res.status(200).json({msg:'product Id${prodid}'});
        }
        catch
        {
            return res.status(500).json({msg:"500 server error"});
        }
        },
        AddNew:(req,res)=>{
            try{
                console.log(req,body);
                return res.status(200).json({msg:"add new product"});
            }
            catch
            {
                return res.status(500).json({msg:"500 server error"})
            }
        },
        updateById:(req,res)=>{
            try{
                let prodid=req.params.id;
                return res.status(200).json({msg:`update product id ${prodid}`});
            }
            catch
            {
                return res.status(200).json({msg:"500 server error"});
            }
        },
        deletById:(req,res)=>{
            try{
                let prodid=req.params.id;
                return res.status(200).json({msg:`delet product Id ${prodid}`});
            }
            catch
            {
                return res.status(500).json({msg:"500 server error"});
            }
        },
    }    

