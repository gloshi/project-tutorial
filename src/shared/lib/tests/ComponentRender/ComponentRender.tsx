import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18nForTests from 'shared/config/i18/i18nForTests';
import { MemoryRouter } from 'react-router-dom';
import { StateSheme, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';


export interface componentRenderProps {
    route?: string,
    initialState?: DeepPartial<StateSheme>
}

export function componentRender(component: ReactNode, options:componentRenderProps = {}) {
    
    const {
        route = '/',
        initialState
    } = options
    
    return render(
        <StoreProvider initialState={initialState}>
        <MemoryRouter initialEntries={[route]}>
        <I18nextProvider i18n={i18nForTests}>
            {component}
        </I18nextProvider>
        </MemoryRouter>
        </StoreProvider>
    );
}