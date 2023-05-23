import React from 'react'
import {Routes,Route} from "react-router-dom";
import {Layout} from "../layouts";
import { Footer,Home,FormPersonas,AdminPersonas,FormServicios,ContratarServi,Servoci,Tipos,AdminServicios, Prueba } from '../pages';


export function Rutas() {
    const loadLayouts=(Layout,Page)=>{
        return(
            <Layout>
                <Page/>
            </Layout>
        )
    }
  return (
   <Routes>
    <Route path='/' element={loadLayouts(Layout, Home)}/>
    
    <Route path='/persona' element={loadLayouts(Layout, AdminPersonas)}/>
    <Route path='/formpersona' element={loadLayouts(Layout, FormPersonas)}/>
    <Route path='/formpersona/:id' element={loadLayouts(Layout, FormPersonas)}/>

    <Route path='/formservicio' element={loadLayouts(Layout, FormServicios)}/>
    <Route path='/formservicio/:id' element={loadLayouts(Layout, FormServicios)}/>
    <Route path='/admoservi' element={loadLayouts(Layout,AdminServicios)}/>


    <Route path='/tipos' element={loadLayouts(Layout, Tipos)}/>

    <Route path='/contratar' element={loadLayouts(Layout, ContratarServi)}/>
    <Route path='/contratar/:id' element={loadLayouts(Layout, ContratarServi)}/>

    <Route path='/servocen' element={loadLayouts(Layout, Servoci)}/>
    
    <Route path='/prueba' element={loadLayouts(Layout, Prueba)}/>

    
    
    
   </Routes> 
  )
}
