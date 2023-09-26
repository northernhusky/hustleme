import { registerRootComponent } from 'expo';
import Application from './Application';
import {store} from './src/reducer'
import 'localstorage-polyfill';
import {Provider} from 'react-redux'

const App = () => (
    <Provider store={store}>
        <Application />
    </Provider>
)

registerRootComponent(App);
