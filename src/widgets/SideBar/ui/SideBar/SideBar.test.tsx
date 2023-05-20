import {fireEvent, screen} from '@testing-library/react'
import React from 'react'
import { SideBar } from './SideBar'
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation'

describe('SideBar', () => {
    test('render SideBar', () => {
        renderWithTranslation((<SideBar/>))
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    }),
    test('toggle SideBar', () => {
        renderWithTranslation((<SideBar/>))
        const toggleBtn = screen.getByTestId('sidebarBtn')
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        fireEvent.click(toggleBtn)
        expect(screen.getByTestId('sidebar')).toHaveClass('isVisible')
    })
  

})