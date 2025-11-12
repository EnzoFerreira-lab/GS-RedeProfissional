import React from 'react'
import { motion } from 'framer-motion'

export default function Footer(){
  return (
    <motion.footer initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:0.4 }} className="footer">
      <p>© {new Date().getFullYear()} Rede Profissional — FIAP • Global Solution</p>
      <p style={{fontSize:12, marginTop:6}}>Front-End Web Development — 2º semestre / 2025</p>
    </motion.footer>
  )
}
