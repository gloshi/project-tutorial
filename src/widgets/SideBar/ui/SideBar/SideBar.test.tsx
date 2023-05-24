import {fireEvent, screen} from '@testing-library/react'
import React from 'react'
import { SideBar } from './SideBar'
import { componentRender } from 'shared/lib/tests/ComponentRender/ComponentRender'

describe('SideBar', () => {
    test('render SideBar', () => {
        componentRender((<SideBar/>))
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    }),
    test('toggle SideBar', () => {
        componentRender((<SideBar/>))
        const toggleBtn = screen.getByTestId('sidebarBtn')
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        fireEvent.click(toggleBtn)
        expect(screen.getByTestId('sidebar')).toHaveClass('isVisible')
    })
  

})