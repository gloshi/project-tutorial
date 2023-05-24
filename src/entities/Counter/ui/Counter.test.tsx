 // @ts-ignore
import {fireEvent, screen} from '@testing-library/react'
import React from 'react'
import { Counter } from './Counter'
import { userEvent } from '@storybook/testing-library';

import { componentRender } from 'shared/lib/tests/ComponentRender/ComponentRender'

describe('Counter', () => { 
    test('render Counter', () => {
        componentRender(<Counter/>, {
            initialState: {counter:{value:10}}
        })
        expect(screen.getByTestId('value-title')).toHaveTextContent('10')
    }),
    test('increment btn', () => {
        componentRender(<Counter/>, {
            initialState: {counter:{value:10}}
        })
        userEvent.click(screen.getByTestId('inc-btn'))
        expect(screen.getByTestId('value-title')).toHaveTextContent('11')
    })
    test('decrement btn', () => {
        componentRender(<Counter/>, {
            initialState: {counter:{value:10}}
        })
        userEvent.click(screen.getByTestId('dec-btn'))
        expect(screen.getByTestId('value-title')).toHaveTextContent('9')
    })

  

})