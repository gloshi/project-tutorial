import { classNames } from "./classNames"

describe('classNames', () => {
    test('with only one param', () => {
        expect(classNames('someClass')).toBe('someClass')
    }),
        test('with additional params', () => {

            const final = 'someClass class1 class2'

            expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(final)
        }),
        test('with additional params', () => {

            const final = 'someClass class1 class2 hovered'

            expect(classNames('someClass', { hovered: true }, ['class1', 'class2']))
                .toBe(final)
        }),
        test('with additional params', () => {

            const final = 'someClass class1 class2 hovered'

            expect(classNames('someClass', { hovered: true, active: false }, ['class1', 'class2']))
                .toBe(final)
        })
        test('with additional params', () => {

            const final = 'someClass class1 class2 hovered'

            expect(classNames('someClass', { hovered: true, active: undefined }, ['class1', 'class2']))
                .toBe(final)
        })
})