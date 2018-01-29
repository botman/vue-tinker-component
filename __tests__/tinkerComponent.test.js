import { TinkerComponent } from '../src';
import Vue from 'vue/dist/vue.js';

describe('TinkerComponent', () => {
    Vue.component('tinker-component', TinkerComponent);

    it('can mount', async () => {
        document.body.innerHTML = `
            <div id="app">
                <tinker-component></tinker-component>
            </div>
        `;

        await createVm();

        expect(document.body.innerHTML).toMatchSnapshot();
    });

    it('can have a different api endpoint', async () => {
        const endpoint = 'https://botman.io/example-endpoint';
        document.body.innerHTML = `
            <div id="app">
                <tinker-component api-endpoint=${endpoint}></tinker-component>
            </div>
        `;

        const app = await createVm();

        expect(app.component.apiEndpoint).toEqual(endpoint);
    });

    it('can have a different user-id', async () => {
        const userId = 'my-custom-user-id';
        document.body.innerHTML = `
            <div id="app">
                <tinker-component user-id=${userId}></tinker-component>
            </div>
        `;

        const app = await createVm();

        expect(app.component.userId).toEqual(userId);
    });
});

async function createVm() {
    const vm = new Vue({
        el: '#app',
    });

    await Vue.nextTick(() => {});

    return { app: vm, component: vm.$children[0] };
}