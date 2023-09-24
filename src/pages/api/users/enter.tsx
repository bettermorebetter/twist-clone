import { NextApiRequest, NextApiResponse } from "next";

async function handler (
    req: NextApiRequest,
    res: NextApiResponse<ResponseType>
){
    const {email} = req.body;
    const user = email ? {email} : null;
    if(!user) return res.status(400).json({ok: false});
    const payload = Math.floor(100000+Math.random() * 900000)+"";
    const token = await 
}