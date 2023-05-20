import {render,screen} from '@testing-library/react'
import { Button, ThemeButtonChanger } from './Button'
import React from 'react'

describe('button', () => {
    test('render btn', () => {
        render(<Button>Test</Button>)
        expect(screen.getByText('Test')).toBeInTheDocument()
    }),
    test('render btn with classes', () => {
        render(<Button theme={ThemeButtonChanger.CLEAR}>Test</Button>)
        expect(screen.getByText('Test')).toHaveClass('clear')
        screen.debug()
    })

})