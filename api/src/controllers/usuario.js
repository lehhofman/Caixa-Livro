const {PrismaClient} = require ('@prisma/client');
const prisma = new PrismaClient();

const create = async (req,res) => {
    const usuario = await prisma.usuario.create({
        data: {
            nome: req.body
        }
    });
    res.json(usuario);
}

const read = async (req,res) =>{
    const usuarios = await prisma.usuario.findMany();
    res.json(usuarios);
}

module.exports = {
    create,
    read
}