import { StateSheme } from 'app/providers/StoreProvider';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from './aticleDetails';

describe('articleDetails.test', () => {
    test('should return data', () => {
        const data = {
            id: '1',
            title: 'subtitle',
        };
        const state: DeepPartial<StateSheme> = {
            articleDetails: {
                data,
            },
        };
        expect(getArticleDetailsData(state as StateSheme)).toEqual(data);
    });
    test('should work with empty state data', () => {
        const state: DeepPartial<StateSheme> = {};
        expect(getArticleDetailsData(state as StateSheme)).toEqual(undefined);
    });
    test('should return error', () => {
        const state: DeepPartial<StateSheme> = {
            articleDetails: {
                error: 'error',
            },
        };
        expect(getArticleDetailsError(state as StateSheme)).toEqual('error');
    });
    test('should work with empty state error', () => {
        const state: DeepPartial<StateSheme> = {};
        expect(getArticleDetailsError(state as StateSheme)).toEqual(undefined);
    });
    test('should return isLoading', () => {
        const state: DeepPartial<StateSheme> = {
            articleDetails: {
                isLoading: true,
            },
        };
        expect(getArticleDetailsIsLoading(state as StateSheme)).toEqual(true);
    });
    test('should work with empty state isLoading', () => {
        const state: DeepPartial<StateSheme> = {};
        expect(getArticleDetailsIsLoading(state as StateSheme)).toEqual(false);
    });
});
