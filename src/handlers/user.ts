import prisma from '../db'
import { comparePasswords, createJWT, hashPassword } from '../modules/auth'


export const createNewUser = async (req, res) => {
  try {
    const existingUser = await prisma.user.findUnique({
      where: {
        email: req.body.email,
      },
    });

    if (existingUser) {
      return res.status(400).json({ error: 'Email already in use' });
    }

    const user = await prisma.user.create({
      data: {
        email: req.body.email,
        password: await hashPassword(req.body.password),
        name:req.body.name,
      }
    })

   
  
    const token = await createJWT(user)
   return  res.status(200).json({ token })
  } catch (error) {
    console.log(error)

    return res.status(500).json({ error });
  }
 
}

export const signin = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: req.body.email
      }
    })

    if(!user){
      return res.status(401).json({message:"No user"})
    }

     const isValid = await comparePasswords(req.body.password, user.password)
    
     if (!isValid) {
       return res.status(401).json({message: ''})
    }
  
    const token = createJWT(user)
    return res.json({ token })
  } catch (error) {
    return res.status(500).json({ error: 'Server error' });
  }
  
}