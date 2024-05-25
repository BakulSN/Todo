import { SApp } from './assets/styles/app.styles';
import { TodoWrapper } from './components/TodoWrapper/TodoWrapper';

const App: React.FC = () => {
    return (
        <SApp>
            <TodoWrapper />
        </SApp>
    );
};

export default App;
