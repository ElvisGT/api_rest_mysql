import {Router} from 'express';

const router = Router();

router.get('/',(req,res) => {
  res.status(404).json({
    msg:'Ruta no encontrada'
  })
})

export default router;