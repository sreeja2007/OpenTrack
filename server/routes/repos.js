const express=require('express');
const axios=require('axios');
const router=express.Router();
const authMiddleware=require('../middleware/authMiddleware');
router.get('/',authMiddleware,async(req,res)=>
{
   try{
    const accessToken=req.user.accessToken;
    const response=await axios.get('https://api.github.com/user/repos',
        {
            headers:{Authorization:`Bearer ${accessToken}`},
            params:{sort:'updated',per_page:200}
        }
    );
    res.json(response.data);
   }catch(err)
   {
    console.error(err);
    res.status(500).json({error:'Failed to fetch repos'});
   }
});
module.exports=router;