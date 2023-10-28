import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Anurag Yadav',
    email: 'ay228241@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  }

]
export default users;
