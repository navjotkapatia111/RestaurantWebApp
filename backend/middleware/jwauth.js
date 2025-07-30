import jwt from 'jsonwebtoken'

export const verifytoken = async(req,res,next)=>{
    try {
        let token = null
        if(req.cookies && req.cookies.token){
            token = req.cookies.token
        }
        else if(
            req.headers.authorization &&
            req.headers.authorization.startsWith('Bearer ')
        )
        token = req.headers.authorization.split(' ')[1]
        if (!token) {
            return res.status(400).json({message:'auth is required'})
          }
          jwt.verify(token, 'test', (err, decoded) => {
            if (err) {
              return res.status(401).json({message:'invalid token'})
            }
            req.user = decoded; 
            next(); 
        });
    } 
    catch (error) {
      next(error);
    }
    
}