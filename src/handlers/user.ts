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
      return res.status(404).json({ error: 'Email already in use' });
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
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" })
    }

    const user = await prisma.user.findUnique({
      where: { email }
    })

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" })
    }

    const isValid = await comparePasswords(password, user.password)

    if (!isValid) {
      return res.status(401).json({ message: "Invalid credentials" })
    }

    const token = createJWT(user)
    return res.status(200).json({ token })
  } catch (error) {
    console.error('Signin error:', error)
    return res.status(500).json({ message: "Internal server error" })
  }
}