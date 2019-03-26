import * as api from '../unsplash';
jest.setTimeout(30000);
describe('API Auth', () => {

    describe('login', () => {

        it('has a happy path', async () => {

            const response = await api.login();
            const status = response.status
            expect(status).toEqual(200);

        });
    });
});