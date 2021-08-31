import React from 'react'
import { NavItem } from './NavItem'


// recibe el arreglo categorias y lo muestra mapeandolo correctamente
// hacia el componente NavItem
export const NavList = ( {categorias = []} ) => {

    return (
        <>
            {categorias.map((categ) => <NavItem key={categ.id} {...categ}/> )}
        </>

    )
}
